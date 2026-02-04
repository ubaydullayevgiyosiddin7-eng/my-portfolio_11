import { useTranslation } from 'react-i18next';
import { socialLinks, skillLevels, tools, projectMeta, navHrefs, type SkillLevel } from '../data/portfolio';

interface Skill {
  name: string;
  desc: string;
  level: SkillLevel;
}

interface Project {
  id: number;
  title: string;
  description: string;
  features: string[];
  video?: string;
  images?: string[];
  tags: string[];
  github: string;
  demo: string;
  isSecret?: boolean;
}

export function usePortfolioData() {
  const { t } = useTranslation();

  const personalInfo = {
    name: t('portfolio:personalInfo.name'),
    role: t('portfolio:personalInfo.role'),
    description: t('portfolio:personalInfo.description'),
    location: t('portfolio:personalInfo.location'),
  };

  const roles = t('portfolio:roles', { returnObjects: true }) as string[];

  const translatedSkills = t('portfolio:skills', { returnObjects: true }) as {
    ai: Array<{ name: string; desc: string }>;
    web: Array<{ name: string; desc: string }>;
    mobile: Array<{ name: string; desc: string }>;
  };

  const skills = {
    ai: translatedSkills.ai.map((s, i) => ({
      ...s,
      level: skillLevels.ai[i],
    })) as Skill[],
    web: translatedSkills.web.map((s, i) => ({
      ...s,
      level: skillLevels.web[i],
    })) as Skill[],
    mobile: translatedSkills.mobile.map((s, i) => ({
      ...s,
      level: skillLevels.mobile[i],
    })) as Skill[],
    tools,
  };

  const translatedProjects = t('portfolio:projects', { returnObjects: true }) as Array<{
    id: number;
    title: string;
    description: string;
    features: string[];
  }>;

  const projects: Project[] = translatedProjects.map((project) => {
    const meta = projectMeta.find((p) => p.id === project.id)!;
    return { ...project, ...meta };
  });

  const navLinks = [
    { name: t('common:nav.home'), href: navHrefs[0] },
    { name: t('common:nav.about'), href: navHrefs[1] },
    { name: t('common:nav.skills'), href: navHrefs[2] },
    { name: t('common:nav.projects'), href: navHrefs[3] },
    { name: t('common:nav.contact'), href: navHrefs[4] },
  ];

  return {
    personalInfo,
    roles,
    skills,
    projects,
    navLinks,
    socialLinks,
  };
}
