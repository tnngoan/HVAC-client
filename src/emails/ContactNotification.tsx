import type { ContactFormData } from "@/lib/schemas";

const serviceLabels: Record<string, string> = {
  "ac-repair": "AC Repair",
  heating: "Heating Repair",
  emergency: "Emergency Service",
  installation: "HVAC Installation",
  maintenance: "Maintenance Plan",
  "air-quality": "Indoor Air Quality",
  other: "Other",
};

interface Props {
  data: ContactFormData;
}

export default function ContactNotification({ data }: Props) {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        maxWidth: "600px",
        margin: "0 auto",
      }}
    >
      <div
        style={{
          backgroundColor: "#1e40af",
          padding: "24px",
          borderRadius: "8px 8px 0 0",
        }}
      >
        <h1 style={{ color: "#ffffff", margin: 0, fontSize: "20px" }}>
          New Service Request
        </h1>
      </div>

      <div
        style={{
          padding: "24px",
          backgroundColor: "#f9fafb",
          border: "1px solid #e5e7eb",
          borderTop: "none",
          borderRadius: "0 0 8px 8px",
        }}
      >
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <tbody>
            <tr>
              <td
                style={{
                  padding: "8px 0",
                  fontWeight: "bold",
                  color: "#374151",
                  width: "140px",
                  verticalAlign: "top",
                }}
              >
                Name:
              </td>
              <td style={{ padding: "8px 0", color: "#111827" }}>
                {data.name}
              </td>
            </tr>
            <tr>
              <td
                style={{
                  padding: "8px 0",
                  fontWeight: "bold",
                  color: "#374151",
                  verticalAlign: "top",
                }}
              >
                Email:
              </td>
              <td style={{ padding: "8px 0", color: "#111827" }}>
                <a href={`mailto:${data.email}`}>{data.email}</a>
              </td>
            </tr>
            <tr>
              <td
                style={{
                  padding: "8px 0",
                  fontWeight: "bold",
                  color: "#374151",
                  verticalAlign: "top",
                }}
              >
                Phone:
              </td>
              <td style={{ padding: "8px 0", color: "#111827" }}>
                <a href={`tel:${data.phone}`}>{data.phone}</a>
              </td>
            </tr>
            <tr>
              <td
                style={{
                  padding: "8px 0",
                  fontWeight: "bold",
                  color: "#374151",
                  verticalAlign: "top",
                }}
              >
                Service:
              </td>
              <td style={{ padding: "8px 0", color: "#111827" }}>
                {serviceLabels[data.serviceType] || data.serviceType}
              </td>
            </tr>
            <tr>
              <td
                style={{
                  padding: "8px 0",
                  fontWeight: "bold",
                  color: "#374151",
                  verticalAlign: "top",
                }}
              >
                Property:
              </td>
              <td
                style={{
                  padding: "8px 0",
                  color: "#111827",
                  textTransform: "capitalize",
                }}
              >
                {data.propertyType}
              </td>
            </tr>
            <tr>
              <td
                style={{
                  padding: "8px 0",
                  fontWeight: "bold",
                  color: "#374151",
                  verticalAlign: "top",
                }}
              >
                Message:
              </td>
              <td
                style={{
                  padding: "8px 0",
                  color: "#111827",
                  whiteSpace: "pre-wrap",
                }}
              >
                {data.message}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
