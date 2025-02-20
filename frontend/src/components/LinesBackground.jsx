export default function LinesBackground() {
  return (
    <div className="absolute inset-0 -z-10 pointer-events-none">
      {/* Big Squares Grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: "transparent",
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 1) 3px, transparent 3px), linear-gradient(90deg, rgba(0, 0, 0, 0.1) 3px, transparent 3px)",
          backgroundSize: "100px 100px",
        }}
      ></div>

      {/* 4-Sided Fade Effect */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at top, rgba(229, 222, 222, 0.6), rgba(229, 222, 222, 0) 50%),
            radial-gradient(circle at bottom, rgba(229, 222, 222, 0.6), rgba(229, 222, 222, 0) 50%),
            radial-gradient(circle at left, rgba(229, 222, 222, 0.6), rgba(229, 222, 222, 0) 50%),
            radial-gradient(circle at right, rgba(229, 222, 222, 0.6), rgba(229, 222, 222, 0) 50%)
          `,
        }}
      ></div>
    </div>
  );
}
