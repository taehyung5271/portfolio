import CareerCard from "../../../components/ui/CareerCard";
import SectionTitle from "../../../components/ui/SectionTitle";
import styles from "./Career.module.css";
import { Element } from "react-scroll";

const Career = () => {

  const careers = [
    {
      id: 1,
      companyName: "회사명(예시)",
      position: "Backend Developer",
      startDate: "2025.12.18",
      endDate: "2026.06.29(종료예정)",
      companyIntro: "회사 소개를 간단하게 한 줄로 작성",
      logoUrl: "", // 없으면 fallback '기업로고'가 뜸
      skills: [
        { id: 1, name: "Spring", background_color: "#111111", text_color: "#ffffff" },
        { id: 2, name: "JPA", background_color: "#111111", text_color: "#ffffff" },
      ],
      descriptions: [
        {
          id: 1,
          title: "회사에서의 대표 이력",
          detail: "비즈프로필 기반 3팀 서비스 개발 (Frontend, Backend)",
        },
        {
          id: 2,
          title: "회사에서의 대표 이력2",
          detail: "유입 확보를 위한 기능 개선 및 성능 최적화 진행",
        },
      ],
    },
    {
      id: 1,
      companyName: "회사명(예시)",
      position: "Backend Developer",
      startDate: "2025.12.18",
      endDate: "2026.06.29(종료예정)",
      companyIntro: "회사 소개를 간단하게 한 줄로 작성",
      logoUrl: "", // 없으면 fallback '기업로고'가 뜸
      skills: [
        { id: 1, name: "Spring", background_color: "#111111", text_color: "#ffffff" },
        { id: 2, name: "JPA", background_color: "#111111", text_color: "#ffffff" },
      ],
      descriptions: [
        {
          id: 1,
          title: "회사에서의 대표 이력",
          detail: "비즈프로필 기반 3팀 서비스 개발 (Frontend, Backend)",
        },
        {
          id: 2,
          title: "회사에서의 대표 이력2",
          detail: "유입 확보를 위한 기능 개선 및 성능 최적화 진행 유입 확보를 위한 기능 개선 및 성능 최적화 진행유입 확보를 위한 기능 개선 및 성능 최적화 진행",
        },
      ],
    },
  ];


  return (
    <Element name="career">
      <section className={styles.section}>
        <SectionTitle title="Career" />

        <div className={styles.list}>
          {careers.map((c) => (
            <CareerCard
              key={c.id}
              companyName={c.companyName}
              position={c.position}
              startDate={c.startDate}
              endDate={c.endDate}
              companyIntro={c.companyIntro}
              logoUrl={c.logoUrl}
              skills={c.skills}
              descriptions={c.descriptions}
            />
          ))}
        </div>
      </section>
    </Element>
  );
};

export default Career;
