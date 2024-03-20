export type Theme = {
  created_at: number
  title: string
  frameworks: string[]
  categories: string[]
  author: string
  description: string
  popularity: number
  images: string[]
  tags: string[]
  download_link: string
  preview_link: string
  upDatedAt: number
  repos: string
  repos_api_url: string
  id: string
  colors: string[]
  features: string[]
  metaTitle: string
  slug: string
}

export type ReposInfos = {
  name: string
  stargazers_count: number
  forks_count: number
  openIssues: number
  subscribers_count: number
  default_branch: string
  topics: string[]
  created_at: string
  updated_at: string
  pushed_at: string
  clone_url: string
  git_url: string
  watchers: string
  languages: {
    [key: string]: number
  }
  contributors_count: number
  contributors: {
    login: string
    avatar: string
  }
  license: {
    key: string
    name: string
    spdx_id: string
    url: string
    node_id: string
  }
} | null

export type DonutChartProps = {
  value: number
  key: string
}[]

export type Icon = {
  name: string
  tags: string[]
  version: number
  popularity: number
  codepoint: number
  unsupported_families: string[]
  categories: string[]
  sizes_px?: number[]
  svg: string
  id: string
  viewBox: string
}
