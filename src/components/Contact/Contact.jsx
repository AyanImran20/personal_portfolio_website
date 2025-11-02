import React, { useState } from "react";

const Contact = () => {
  const [status, setStatus] = useState({ ok: null, msg: "", loading: false });

  const onSubmit = async (event) => {
    event.preventDefault();
    if (status.loading) return;
    setStatus({ ok: null, msg: "Sending...", loading: true });

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      access_key: "66558b15-9373-4ae7-b81a-de551a7a09cf",
      subject: "New message from portfolio site",
      replyto: formData.get("email") || "",
      name: formData.get("name") || "",
      email: formData.get("email") || "",
      message: formData.get("message") || "",
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const json = await response.json();

      if (response.status === 200 && json.success) {
        setStatus({ ok: true, msg: "Message sent!", loading: false });
        form.reset();
      } else {
        setStatus({ ok: false, msg: json.message || "Failed to send.", loading: false });
      }
    } catch {
      setStatus({ ok: false, msg: "Network error. Please try again.", loading: false });
    }
  };

  return (
    <div className="text-matte flex flex-1 justify-center items-center">
      <form onSubmit={onSubmit} className="bg-card rounded-xl p-3 lg:p-5 flex flex-col gap-5 lg:min-w-[50vw]">
        <div className="flex flex-1 justify-center">
          <h1 className="text-4xl font-bold">Send me a message</h1>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="hover:text-highlight hover:cursor-pointer">Full Name</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter your name"
            required
            className="rounded bg-surface p-3 border border-gray-300 focus:outline-none focus:border-highlight focus:ring-2 focus:ring-highlight"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="hover:text-highlight hover:cursor-pointer">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email address"
            required
            className="rounded bg-surface p-3 border border-gray-300 focus:outline-none focus:border-highlight focus:ring-2 focus:ring-highlight"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="hover:text-highlight hover:cursor-pointer">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Enter your message"
            required
            className="rounded bg-surface p-3 min-h-24 border border-gray-300 focus:outline-none focus:border-highlight focus:ring-2 focus:ring-highlight"
          />
        </div>

        <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

        <div className="flex justify-center items-center">
          <button
            type="submit"
            disabled={status.loading}
            className={`p-3 rounded-xl shadow bg-surface transition-all hover:shadow-highlight hover:shadow-xl hover:text-highlight hover:-translate-y-1 hover:scale-[1.02] active:translate-y-1 ${status.loading ? "opacity-60 pointer-events-none" : ""}`}
          >
            {status.loading ? "Sending..." : "Send Message"}
          </button>
        </div>

        {status.msg && <p className={`text-center text-sm ${status.ok ? "text-green-600" : "text-red-600"}`}>{status.msg}</p>}
      </form>
    </div>
  );
};

export default Contact;
