import { useQuery } from "@tanstack/react-query";
import CareerCard from "../../../components/ui/CareerCard";
import SectionTitle from "../../../components/ui/SectionTitle";
import styles from "./Career.module.css";
import { Element } from "react-scroll";

import { fetchCareers } from "../../../api/career";
import { normalizeCareer } from "../../../Utils/normalizeCareer";
import type { CareerUI } from "../../../types/CareerUI";

const Career = () => {
  const {
    data: careers = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["careers"],
    queryFn: fetchCareers,
    select: (raw) => raw.map(normalizeCareer) as CareerUI[], // raw -> UI
    staleTime: 1000 * 60 * 5, // 5분 캐시(원하면 조절)
  });

  return (
    <Element name="career">
      <section className={styles.section}>
        <SectionTitle title="Career" />

        {isLoading && <p>loading...</p>}

        {isError && (
          <p style={{ color: "crimson" }}>
            데이터를 불러오지 못했어요: {(error as Error).message}
          </p>
        )}

        {!isLoading && !isError && (
          <div className={styles.list}>
            {careers.map((c) => (
              <CareerCard
                key={c.id}
                companyName={c.company?.name ?? ""}
                companyIntro={c.company?.intro ?? undefined}
                logoUrl={c.company?.logo_url ?? undefined}
                position={c.position ?? undefined}
                startDate={c.startDate}
                endDate={c.endDate}
                skills={c.skills}
                descriptions={c.descriptions}
              />
            ))}
          </div>
        )}
      </section>
    </Element>
  );
};

export default Career;