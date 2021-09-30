import AllowNull from '../../common/AllowNull'

type Header = {
  title: string,
  backgroundImage: AllowNull<string>,
  backgroundColor: AllowNull<string>,
  showHeader: boolean
}

export default Header
