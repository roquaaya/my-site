import { createFileRoute } from "@tanstack/react-router";
import StaffReadyLanding from "@/components/StaffReadyLanding";

export const Route = createFileRoute("/")({
  component: StaffReadyLanding,
  head: () => ({
    meta: [
      { title: "STAFF READY — حلول النقل المؤسسي والسياحي" },
      {
        name: "description",
        content:
          "STAFF READY: شركة رائدة في نقل الموظفين والرحلات الجماعية بأسطول حديث من 120 حافلة وخبرة 15 سنة.",
      },
      { property: "og:title", content: "STAFF READY — حلول النقل المؤسسي" },
      {
        property: "og:description",
        content: "أسطول حديث، سائقون محترفون، خدمة 24/7 لنقل فريقك بأمان وكفاءة.",
      },
    ],
  }),
});
