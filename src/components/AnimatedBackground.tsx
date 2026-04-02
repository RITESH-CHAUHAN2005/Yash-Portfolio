import { useEffect, useRef } from "react";

const AnimatedBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // Set canvas size
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // Create soft bright glow orbs
        const orbs = [
            {
                x: canvas.width * 0.2,
                y: canvas.height * 0.2,
                radius: 280,
                vx: 0.25,
                vy: 0.18,
                color: "rgba(168, 85, 247, 0.10)",
            },
            {
                x: canvas.width * 0.8,
                y: canvas.height * 0.3,
                radius: 300,
                vx: -0.22,
                vy: 0.2,
                color: "rgba(34, 197, 245, 0.10)",
            },
            {
                x: canvas.width * 0.5,
                y: canvas.height * 0.7,
                radius: 330,
                vx: 0.2,
                vy: -0.16,
                color: "rgba(236, 72, 153, 0.08)",
            },
            {
                x: canvas.width * 0.15,
                y: canvas.height * 0.8,
                radius: 250,
                vx: 0.18,
                vy: -0.2,
                color: "rgba(59, 130, 246, 0.08)",
            },
            {
                x: canvas.width * 0.85,
                y: canvas.height * 0.6,
                radius: 270,
                vx: -0.2,
                vy: 0.14,
                color: "rgba(16, 185, 129, 0.08)",
            },
        ];

        const animate = () => {
            // Keep page bright white with subtle glow
            ctx.fillStyle = "rgba(255, 255, 255, 0.92)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Draw and update orbs
            orbs.forEach((orb) => {
                // Draw gradient
                const gradient = ctx.createRadialGradient(
                    orb.x,
                    orb.y,
                    0,
                    orb.x,
                    orb.y,
                    orb.radius
                );
                gradient.addColorStop(0, orb.color);
                gradient.addColorStop(1, "rgba(0, 0, 0, 0)");

                ctx.fillStyle = gradient;
                ctx.fillRect(
                    orb.x - orb.radius,
                    orb.y - orb.radius,
                    orb.radius * 2,
                    orb.radius * 2
                );

                // Update position
                orb.x += orb.vx;
                orb.y += orb.vy;

                // Bounce off walls
                if (orb.x - orb.radius < 0 || orb.x + orb.radius > canvas.width) {
                    orb.vx *= -1;
                }
                if (orb.y - orb.radius < 0 || orb.y + orb.radius > canvas.height) {
                    orb.vy *= -1;
                }
            });

            requestAnimationFrame(animate);
        };

        animate();

        // Handle window resize
        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full pointer-events-none -z-50"
            style={{ background: "linear-gradient(135deg, #ffffff 0%, #f8ffef 50%, #fff6f8 100%)" }}
        />
    );
};

export default AnimatedBackground;
