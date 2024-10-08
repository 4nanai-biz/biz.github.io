import { reactive } from 'vue'
import { PostData } from '../utils/posts.data'

interface StoreState {
  selectedPosts: PostData[]
  currTag: string
  currPost: PostData
  searchDialog: boolean
  splashLoading: boolean
}

const state: StoreState = reactive({
  selectedPosts: [],
  currTag: '',
  currPost: {
    id: 0,
    title: '',
    content: '',
    href: '',
    create: 0,
    update: 0,
    tags: [],
    wordCount: 0,
    cover: '',
    excerpt: '',
  },
  searchDialog: false,
  splashLoading: true,
})

export function useStore() {
  return { state }
}
