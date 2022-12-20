/* This file is generated and managed by tsync */

type MarkDown = string

type Link = string

interface Resume {
  personal: Personal
  skills: Skills
  work_exp: Array<WorkExp>
  projects: Array<Project>
  education: Array<Education>
}

interface Personal {
  name: string
  socials: Array<Social>
  summary?: MarkDown
}

interface Social {
  name: string
  link: Link | undefined
  display: string
}

interface Skills {
  skills: Array<string>
  groups: Array<SkillGroup>
}

interface SkillGroup {
  name: string
  skills: Skills
}

interface Duration {
  start: string
  end: string | undefined
}

interface Project {
  name: string
  link: Link | undefined
  summary: MarkDown | undefined
  details: MarkDown | undefined
  duration: Duration | undefined
}

interface WorkExp {
  position: string
  company: string | undefined
  link: Link | undefined
  summary: MarkDown | undefined
  details: MarkDown | undefined
  duration: Duration | undefined
}

interface Education {
  school: string
  course: string
  marks: string
  duration: Duration | undefined
}
