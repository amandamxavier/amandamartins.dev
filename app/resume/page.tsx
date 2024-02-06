import {
  CertificationList,
  EducationList,
  ExperienceList,
  VolunteeringList,
  SkillBadge,
} from "@/components";

export default function Resume() {
  return (
    <>
      <section>
        <h1>Summary</h1>
        <p>
          I am a fullstack developer focused on frontend development, with
          almost 2 years of professional experience, and passionate about
          enhancing user and developer experiences.
        </p>
      </section>
      <section>
        <h1>Experience</h1>
        <ExperienceList />
      </section>
      <section>
        <h1>Skills</h1>
        <SkillBadge />
      </section>
      <section>
        <h1>Education</h1>
        <EducationList />
      </section>
      <section>
        <h1>Certifications</h1>
        <CertificationList />
      </section>
      <section>
        <h1>Volunteering</h1>
        <VolunteeringList />
      </section>
    </>
  );
}
