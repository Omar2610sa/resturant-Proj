import DashboardSectionsTitle from "@/components/dashboard/DashboardSectionsTitle";

export default function page() {
  return (
    <section className=" flexSection">
      <DashboardSectionsTitle
        title="المستخدمون"
        description="إدارة حسابات مستخدمي الموقع."
        search
        searchColumnId="2"
      />
    </section>
  )
}
