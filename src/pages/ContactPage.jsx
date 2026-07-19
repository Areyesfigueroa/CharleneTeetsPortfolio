import { useState } from "react";
import PageLayout from "../components/PageLayout";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const inputClass =
    "w-full px-3 py-2 text-sm border rounded-none outline-none focus:ring-1 transition-colors";
  const inputStyle = {
    borderColor: "var(--border)",
    backgroundColor: "var(--bg)",
    color: "var(--text)",
  };
  const focusRingStyle = { "--tw-ring-color": "var(--accent)" };
  const labelClass = "block text-sm font-medium mb-1";

  return (
    <PageLayout>
      <div className="flex justify-center pt-16 pb-20">
        <div className="w-full max-w-md">
          <h2
            className="text-xl font-semibold mb-8"
            style={{ color: "var(--text-h)" }}
          >
            Feel Free To Contact Me...
          </h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
            <div>
              <label className={labelClass} style={{ color: "var(--text-h)" }}>
                Name <span style={{ color: "var(--accent)" }}>*</span>
              </label>
              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                className={inputClass}
                style={{ ...inputStyle, ...focusRingStyle }}
              />
            </div>

            <div>
              <label className={labelClass} style={{ color: "var(--text-h)" }}>
                Email <span style={{ color: "var(--accent)" }}>*</span>
              </label>
              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                className={inputClass}
                style={{ ...inputStyle, ...focusRingStyle }}
              />
            </div>

            <div>
              <label className={labelClass} style={{ color: "var(--text-h)" }}>
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                className={inputClass}
                style={{ ...inputStyle, ...focusRingStyle }}
              />
            </div>

            <div>
              <label className={labelClass} style={{ color: "var(--text-h)" }}>
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className={inputClass}
                style={{ ...inputStyle, ...focusRingStyle }}
              />
            </div>

            <div>
              <label className={labelClass} style={{ color: "var(--text-h)" }}>
                Message <span style={{ color: "var(--accent)" }}>*</span>
              </label>
              <textarea
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                className={`${inputClass} resize-none`}
                style={{ ...inputStyle, ...focusRingStyle }}
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 text-sm font-medium tracking-wide transition-opacity hover:opacity-80"
              style={{
                backgroundColor: "var(--accent)",
                color: "#fff",
              }}
            >
              Send
            </button>
          </form>

          <div className="mt-10 flex flex-col items-center gap-0.5">
            <span className="text-sm font-medium" style={{ color: "var(--text-h)" }}>
              Charlene Teets
            </span>
            <span className="text-sm" style={{ color: "var(--text)" }}>
              charteetsart@gmail.com
            </span>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
