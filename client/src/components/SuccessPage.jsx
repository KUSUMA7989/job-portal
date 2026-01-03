export default function SuccessPage() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Application Submitted</h2>
      <p>Thank you for applying!</p>
      <h3>Backend API Output:</h3>
      <pre>{JSON.stringify({ message: "Applied Successfully" }, null, 2)}</pre>
    </div>
  );
}