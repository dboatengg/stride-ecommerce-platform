export default function Footer() {
  return (
    <footer className="bg-header-bg text-header-fg border-t" style={{ borderColor: "var(--header-border)" }}>
      <div className="container py-6 text-center text-sm opacity-70">
        © {new Date().getFullYear()} Stride. All rights reserved.
      </div>
    </footer>
  );
}
// export {    Footer };