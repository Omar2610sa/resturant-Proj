import DashboardSectionsTitle from "@/components/dashboard/DashboardSectionsTitle";

export default function page() {
  return (
    <section className=" flexSection">
      <DashboardSectionsTitle
        title="إدارة الوصفات"
        description="أضف الوصفات وعدّل محتواها من مكان واحد."
        add
        nameAdd="وصفة جديدة"
      />
    </section>
  )
}
