import {
  Blog,
  Faq,
  Header,
  IconList,
  ImageTextBox,
  Jumbotron,
  MediaBox,
  ModalCardList,
  PageLink,
  TextBox,
  Timeline
} from './components'

type ComponentUnion = Blog
  | Faq
  | Header
  | IconList
  | ImageTextBox
  | Jumbotron
  | MediaBox
  | ModalCardList
  | PageLink
  | TextBox
  | Timeline

export default ComponentUnion
