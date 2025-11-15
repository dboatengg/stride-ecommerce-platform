export default function Footer() {
  return (
    <footer className=" bg-header-bg py-6 text-header-fg border-t" style={{ borderColor: "var(--header-border)" }}>
      <div className="page-container text-center text-sm opacity-70">
        © {new Date().getFullYear()} Stride. All rights reserved.
      </div>
    </footer>
  );
}
// export {    Footer };