import { AnimatePresence, motion, useInView } from "framer-motion";
import { Expand, Pause, Play, Sparkles, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import ninjaAnimation from "@/assets/Ninja Animation - Yash Chauhan (1080p, h264).mp4";
import spiderAnimation from "@/assets/Spider man animation - Yash Chauhan (1080p, h264).mp4";

const animations = [
    {
        id: "spider-animation",
        src: spiderAnimation,
        title: "Spider-Verse Motion Film",
        tag: "3D Animation",
        desc: "A stylized action reel with cinematic lighting, fluid camera moves, and comic-inspired energy.",
    },
    {
        id: "ninja-animation",
        src: ninjaAnimation,
        title: "Ninja Combat Sequence",
        tag: "3D Animation",
        desc: "Fast-paced character animation focused on dynamic posing, atmosphere, and polished motion timing.",
    },
] as const;

type AnimationItem = (typeof animations)[number];

const VideoShowcaseSection = () => {
    const sectionRef = useRef<HTMLElement | null>(null);
    const modalVideoRef = useRef<HTMLVideoElement | null>(null);
    const previewCardRefs = useRef<Record<string, HTMLDivElement | null>>({});
    const previewVideoRefs = useRef<Record<string, HTMLVideoElement | null>>({});
    const isInView = useInView(sectionRef, { once: true, amount: 0.08 });

    const [pausedVideos, setPausedVideos] = useState<Record<string, boolean>>(() =>
        Object.fromEntries(animations.map((item) => [item.id, false])),
    );
    const [visibleVideos, setVisibleVideos] = useState<Record<string, boolean>>(() =>
        Object.fromEntries(animations.map((item) => [item.id, false])),
    );
    const [activePreviewId, setActivePreviewId] = useState<string | null>(animations[0].id);
    const [selectedVideo, setSelectedVideo] = useState<AnimationItem | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                setVisibleVideos((current) => {
                    const nextState = { ...current };

                    entries.forEach((entry) => {
                        const videoId = entry.target.getAttribute("data-video-id");

                        if (!videoId) {
                            return;
                        }

                        nextState[videoId] = entry.isIntersecting;
                    });

                    return nextState;
                });
            },
            {
                threshold: 0.45,
                rootMargin: "0px 0px -10% 0px",
            },
        );

        animations.forEach((item) => {
            const card = previewCardRefs.current[item.id];

            if (card) {
                observer.observe(card);
            }
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    useEffect(() => {
        const visibleAndPlayable = animations.filter((item) => visibleVideos[item.id] && !pausedVideos[item.id]);

        if (!visibleAndPlayable.length) {
            setActivePreviewId(null);
            return;
        }

        if (activePreviewId && visibleVideos[activePreviewId] && !pausedVideos[activePreviewId]) {
            return;
        }

        setActivePreviewId(visibleAndPlayable[0].id);
    }, [activePreviewId, pausedVideos, visibleVideos]);

    useEffect(() => {
        animations.forEach((item) => {
            const video = previewVideoRefs.current[item.id];

            if (!video) {
                return;
            }

            const shouldPlay = isInView && visibleVideos[item.id] && activePreviewId === item.id && !pausedVideos[item.id];

            if (shouldPlay) {
                const playPromise = video.play();
                playPromise?.catch(() => undefined);
                return;
            }

            video.pause();
        });
    }, [activePreviewId, isInView, pausedVideos, visibleVideos]);

    useEffect(() => {
        document.body.style.overflow = selectedVideo ? "hidden" : "";

        if (!selectedVideo || !modalVideoRef.current) {
            return () => {
                document.body.style.overflow = "";
            };
        }

        modalVideoRef.current.currentTime = 0;
        const playPromise = modalVideoRef.current.play();
        playPromise?.catch(() => undefined);

        return () => {
            document.body.style.overflow = "";
        };
    }, [selectedVideo]);

    const togglePreviewPlayback = (videoId: string) => {
        setPausedVideos((current) => {
            const nextPaused = !current[videoId];
            const video = previewVideoRefs.current[videoId];

            if (video) {
                if (nextPaused) {
                    video.pause();
                } else if (isInView && visibleVideos[videoId]) {
                    setActivePreviewId(videoId);
                    const playPromise = video.play();
                    playPromise?.catch(() => undefined);
                }
            }

            return {
                ...current,
                [videoId]: nextPaused,
            };
        });
    };

    const handleFullscreenPlayback = async () => {
        if (!modalVideoRef.current?.requestFullscreen) {
            return;
        }

        await modalVideoRef.current.requestFullscreen().catch(() => undefined);
    };

    return (
        <section ref={sectionRef} className="relative py-32 overflow-hidden">
            <div className="absolute left-0 top-24 h-56 w-56 rounded-full bg-primary/8 blur-[80px]" />
            <div className="absolute right-0 bottom-12 h-64 w-64 rounded-full bg-accent/8 blur-[90px]" />

            <div className="container relative z-10 px-6">
                <motion.div
                    className="mx-auto mb-16 max-w-3xl text-center"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm uppercase tracking-[0.24em] text-primary">
                        <Sparkles className="h-4 w-4" />
                        3D Animation Reels
                    </div>
                    <h2 className="text-4xl font-heading font-bold text-foreground md:text-5xl">
                        Motion <span className="text-gradient">Showcase</span>
                    </h2>
                    <p className="mt-5 text-base font-body leading-7 text-muted-foreground md:text-lg">
                        From web-slinging Spider-Verse action to razor-sharp ninja combat — two 3D animation reels crafted with precision, depth, and cinematic energy.
                    </p>
                </motion.div>

                <div className="mx-auto grid max-w-5xl gap-8">
                    {animations.map((item, index) => {
                        const isPaused = pausedVideos[item.id];
                        const isActive = activePreviewId === item.id && visibleVideos[item.id] && !isPaused;

                        return (
                            <motion.article
                                key={item.id}
                                className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-card/90 p-4 shadow-[0_16px_50px_-28px_rgba(0,0,0,0.75)]"
                                initial={{ opacity: 0, y: 40 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                                transition={{ duration: 0.55, delay: 0.1 * index }}
                                whileHover={{ y: -4 }}
                            >
                                <div className="pointer-events-none absolute inset-0 rounded-[28px] bg-[linear-gradient(135deg,rgba(168,85,247,0.1),rgba(34,211,238,0.04),transparent_70%)] opacity-70" />

                                <div
                                    ref={(element) => {
                                        previewCardRefs.current[item.id] = element;
                                    }}
                                    data-video-id={item.id}
                                    className="relative overflow-hidden rounded-[22px] border border-white/10 bg-black"
                                    onMouseEnter={() => setActivePreviewId(item.id)}
                                    onFocus={() => setActivePreviewId(item.id)}
                                >
                                    <button
                                        type="button"
                                        className="relative block w-full"
                                        onClick={() => setSelectedVideo(item)}
                                        aria-label={`Open ${item.title} in large view`}
                                    >
                                        <div className="absolute inset-0 z-10 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                                        <video
                                            ref={(element) => {
                                                previewVideoRefs.current[item.id] = element;
                                            }}
                                            src={item.src}
                                            className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-[1.01]"
                                            loop
                                            muted
                                            playsInline
                                            preload="metadata"
                                        />

                                        <div className="absolute left-5 top-5 z-20 inline-flex items-center gap-2 rounded-full border border-white/15 bg-background/70 px-3 py-1.5 text-xs uppercase tracking-[0.24em] text-foreground">
                                            {item.tag}
                                        </div>

                                        <div className="absolute right-5 top-5 z-20 rounded-full border border-white/15 bg-background/70 px-3 py-1.5 text-[11px] uppercase tracking-[0.24em] text-primary">
                                            {isActive ? "Auto preview on" : "Preview ready"}
                                        </div>

                                        <div className="absolute inset-x-0 bottom-0 z-20 p-5 text-left">
                                            <p className="text-xs uppercase tracking-[0.28em] text-primary/90">Click to expand</p>
                                            <h3 className="mt-2 text-2xl font-heading font-bold text-white">{item.title}</h3>
                                        </div>
                                    </button>
                                </div>

                                <div className="relative z-20 flex flex-col gap-5 px-2 pb-2 pt-5 sm:flex-row sm:items-end sm:justify-between">
                                    <div>
                                        <p className="text-sm leading-7 text-muted-foreground">{item.desc}</p>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <button
                                            type="button"
                                            onClick={(event) => {
                                                event.stopPropagation();
                                                togglePreviewPlayback(item.id);
                                            }}
                                            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-foreground transition hover:border-primary/40 hover:bg-primary/10"
                                            aria-label={isPaused ? `Play ${item.title}` : `Pause ${item.title}`}
                                        >
                                            {isPaused ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}
                                            {isPaused ? "Play" : "Pause"}
                                        </button>

                                        <button
                                            type="button"
                                            onClick={() => setSelectedVideo(item)}
                                            className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary transition hover:bg-primary/15"
                                            aria-label={`Expand ${item.title}`}
                                        >
                                            <Expand className="h-4 w-4" />
                                            Full screen
                                        </button>
                                    </div>
                                </div>
                            </motion.article>
                        );
                    })}
                </div>
            </div>

            <AnimatePresence>
                {selectedVideo && (
                    <motion.div
                        className="fixed inset-0 z-[120] flex items-center justify-center bg-background/92 p-4 md:p-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedVideo(null)}
                    >
                        <motion.div
                            className="relative w-full max-w-6xl overflow-hidden rounded-[28px] border border-white/10 bg-card/95 shadow-[0_28px_120px_-35px_rgba(0,0,0,0.85)]"
                            initial={{ opacity: 0, scale: 0.92, y: 24 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.92, y: 24 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            onClick={(event) => event.stopPropagation()}
                        >
                            <div className="flex items-center justify-between gap-4 border-b border-white/10 px-4 py-4 md:px-6">
                                <div>
                                    <p className="text-xs uppercase tracking-[0.24em] text-primary">{selectedVideo.tag}</p>
                                    <h3 className="mt-2 text-xl font-heading font-bold text-foreground md:text-2xl">{selectedVideo.title}</h3>
                                </div>

                                <div className="flex items-center gap-3">
                                    <button
                                        type="button"
                                        onClick={handleFullscreenPlayback}
                                        className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary transition hover:bg-primary/15"
                                    >
                                        <Expand className="h-4 w-4" />
                                        Open full screen
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setSelectedVideo(null)}
                                        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-foreground transition hover:border-primary/40 hover:text-primary"
                                        aria-label="Close video preview"
                                    >
                                        <X className="h-5 w-5" />
                                    </button>
                                </div>
                            </div>

                            <div className="bg-black">
                                <video
                                    key={selectedVideo.id}
                                    ref={modalVideoRef}
                                    src={selectedVideo.src}
                                    className="max-h-[78vh] w-full object-contain"
                                    controls
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                />
                            </div>

                            <div className="px-4 py-5 md:px-6 md:py-6">
                                <p className="max-w-3xl text-sm leading-7 text-muted-foreground md:text-base">{selectedVideo.desc}</p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default VideoShowcaseSection;