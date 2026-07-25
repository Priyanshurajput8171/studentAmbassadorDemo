"use client";
import React, { memo } from "react";
import Image from "next/image";

const StudentIllustration = memo(function StudentIllustration() {
  return (
    <div className="student-hero-wrapper">
      <div className="glow-aura" />
      <div className="glow-aura-secondary" />

      <div className="ring ring-1" />
      <div className="ring ring-2" />
      <div className="ring ring-3" />

      {Array.from({ length: 8 }, (_, i) => <div key={i} className={`particle p${i + 1}`} />)}

      {["</>", "{ }", "<>", "( )"].map((tag, i) => <span key={tag} className={`code-tag tag-${i + 1}`}>{tag}</span>)}

      <div className="student-image-container">
        <div className="image-glow-underlay" />
        <div className="student-image-mask">
          <Image
            src="/student-hero.jpg"
            alt="Engineering student holding a laptop"
            width={480}
            height={640}
            priority
            className="student-img"
          />
        </div>
        <div className="image-bottom-fade" />
        <div className="rim-light-left" />
        <div className="rim-light-right" />
      </div>

      <div className="scanline" />

      <style jsx>{`
        .student-hero-wrapper {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .glow-aura {
          position: absolute;
          width: 85%;
          height: 85%;
          border-radius: 50%;
          background: radial-gradient(
            ellipse at center,
            rgba(14, 161, 228, 0.2) 0%,
            rgba(14, 161, 228, 0.08) 40%,
            transparent 70%
          );
          filter: blur(40px);
          animation: aura-pulse 5s ease-in-out infinite;
        }
        .glow-aura-secondary {
          position: absolute;
          width: 60%;
          height: 70%;
          border-radius: 50%;
          background: radial-gradient(
            ellipse at center,
            rgba(14, 161, 228, 0.15) 0%,
            rgba(125, 211, 252, 0.05) 50%,
            transparent 70%
          );
          filter: blur(30px);
          animation: aura-pulse 7s ease-in-out infinite reverse;
        }
        @keyframes aura-pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.7;
          }
          50% {
            transform: scale(1.12);
            opacity: 1;
          }
        }

        .ring {
          position: absolute;
          border-radius: 50%;
          border: 1px solid rgba(14, 161, 228, 0.12);
        }
        .ring-1 {
          width: 110%;
          height: 110%;
          animation: ring-rotate 25s linear infinite;
          border-style: dashed;
          border-color: rgba(14, 161, 228, 0.1);
        }
        .ring-2 {
          width: 90%;
          height: 90%;
          animation: ring-rotate 35s linear infinite reverse;
          border-style: dotted;
          border-color: rgba(14, 161, 228, 0.15);
        }
        .ring-3 {
          width: 75%;
          height: 75%;
          animation: ring-rotate 20s linear infinite;
          border-color: rgba(14, 161, 228, 0.08);
        }
        @keyframes ring-rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .particle {
          position: absolute;
          border-radius: 50%;
          background: #0ea1e4;
          pointer-events: none;
        }
        .p1 {
          width: 6px; height: 6px;
          top: 8%; left: 15%;
          animation: float-particle 6s ease-in-out infinite;
          box-shadow: 0 0 12px 3px rgba(14, 161, 228, 0.6);
        }
        .p2 {
          width: 4px; height: 4px;
          top: 15%; right: 10%;
          background: #7dd3fc;
          animation: float-particle 8s ease-in-out infinite 1s;
          box-shadow: 0 0 10px 2px rgba(125, 211, 252, 0.5);
        }
        .p3 {
          width: 3px; height: 3px;
          bottom: 25%; left: 8%;
          background: #fff;
          animation: float-particle 7s ease-in-out infinite 2s;
          box-shadow: 0 0 8px 2px rgba(255, 255, 255, 0.4);
        }
        .p4 {
          width: 5px; height: 5px;
          bottom: 20%; right: 12%;
          animation: float-particle 5s ease-in-out infinite 0.5s;
          box-shadow: 0 0 14px 3px rgba(14, 161, 228, 0.5);
        }
        .p5 {
          width: 3px; height: 3px;
          top: 35%; left: 5%;
          background: #7dd3fc;
          animation: float-particle 9s ease-in-out infinite 3s;
          box-shadow: 0 0 8px 2px rgba(125, 211, 252, 0.4);
        }
        .p6 {
          width: 4px; height: 4px;
          top: 50%; right: 5%;
          background: #fff;
          animation: float-particle 6.5s ease-in-out infinite 1.5s;
          box-shadow: 0 0 10px 2px rgba(255, 255, 255, 0.3);
        }
        .p7 {
          width: 5px; height: 5px;
          top: 5%; left: 55%;
          animation: float-particle 7.5s ease-in-out infinite 2.5s;
          box-shadow: 0 0 12px 3px rgba(14, 161, 228, 0.4);
        }
        .p8 {
          width: 3px; height: 3px;
          bottom: 35%; left: 50%;
          background: #7dd3fc;
          animation: float-particle 8.5s ease-in-out infinite 4s;
          box-shadow: 0 0 8px 2px rgba(125, 211, 252, 0.3);
        }
        @keyframes float-particle {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0.6;
          }
          25% {
            transform: translateY(-15px) translateX(8px);
            opacity: 1;
          }
          50% {
            transform: translateY(-5px) translateX(-5px);
            opacity: 0.8;
          }
          75% {
            transform: translateY(-20px) translateX(3px);
            opacity: 0.5;
          }
        }

        .code-tag {
          position: absolute;
          font-family: 'JetBrains Mono', 'Fira Code', monospace;
          font-weight: 700;
          color: rgba(14, 161, 228, 0.4);
          pointer-events: none;
          user-select: none;
        }
        .tag-1 {
          top: 12%;
          left: 8%;
          font-size: 20px;
          animation: float-tag 7s ease-in-out infinite;
        }
        .tag-2 {
          top: 22%;
          right: 6%;
          font-size: 16px;
          animation: float-tag 6s ease-in-out infinite 1.5s;
          color: rgba(125, 211, 252, 0.35);
        }
        .tag-3 {
          bottom: 30%;
          left: 4%;
          font-size: 14px;
          animation: float-tag 8s ease-in-out infinite 3s;
        }
        .tag-4 {
          bottom: 25%;
          right: 8%;
          font-size: 18px;
          animation: float-tag 5.5s ease-in-out infinite 2s;
          color: rgba(125, 211, 252, 0.3);
        }
        @keyframes float-tag {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
            opacity: 0.4;
          }
          50% {
            transform: translateY(-12px) rotate(3deg);
            opacity: 0.7;
          }
        }

        .student-image-container {
          position: relative;
          z-index: 2;
          width: 75%;
          max-width: 380px;
          animation: student-float 5s ease-in-out infinite;
        }
        @keyframes student-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }

        .image-glow-underlay {
          position: absolute;
          inset: 5%;
          border-radius: 20px;
          background: radial-gradient(
            ellipse at center bottom,
            rgba(14, 161, 228, 0.35) 0%,
            rgba(14, 161, 228, 0.1) 50%,
            transparent 70%
          );
          filter: blur(25px);
          z-index: -1;
        }

        .student-image-mask {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          mask-image: linear-gradient(
            to bottom,
            black 0%,
            black 65%,
            transparent 100%
          );
          -webkit-mask-image: linear-gradient(
            to bottom,
            black 0%,
            black 65%,
            transparent 100%
          );
        }

        .student-image-mask :global(.student-img) {
          width: 100%;
          height: auto;
          display: block;
          object-fit: cover;
          border-radius: 20px;
          filter: brightness(0.95) contrast(1.08) saturate(1.1);
        }

        .image-bottom-fade {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 45%;
          background: linear-gradient(
            to top,
            #050505 0%,
            rgba(5, 5, 5, 0.8) 30%,
            transparent 100%
          );
          border-radius: 0 0 20px 20px;
          pointer-events: none;
          z-index: 1;
        }

        .rim-light-left {
          position: absolute;
          top: 10%;
          left: -2px;
          width: 4px;
          height: 50%;
          background: linear-gradient(
            to bottom,
            transparent,
            rgba(14, 161, 228, 0.5),
            transparent
          );
          border-radius: 4px;
          filter: blur(3px);
          z-index: 3;
        }
        .rim-light-right {
          position: absolute;
          top: 15%;
          right: -2px;
          width: 4px;
          height: 40%;
          background: linear-gradient(
            to bottom,
            transparent,
            rgba(125, 211, 252, 0.4),
            transparent
          );
          border-radius: 4px;
          filter: blur(3px);
          z-index: 3;
        }

        .scanline {
          position: absolute;
          top: 0;
          left: 15%;
          right: 15%;
          height: 2px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(14, 161, 228, 0.3),
            rgba(14, 161, 228, 0.5),
            rgba(14, 161, 228, 0.3),
            transparent
          );
          animation: scan 5s ease-in-out infinite;
          z-index: 5;
          border-radius: 2px;
          filter: blur(1px);
        }
        @keyframes scan {
          0%, 100% {
            top: 10%;
            opacity: 0;
          }
          10% {
            opacity: 0.8;
          }
          50% {
            top: 75%;
            opacity: 0.4;
          }
          90% {
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
});

export default StudentIllustration;
