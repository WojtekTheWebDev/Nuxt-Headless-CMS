import { AllowNull } from "../common"

type Header = {
  title: string,
  backgroundImage: AllowNull<string>,
  backgroundColor: string,
  showHeader: boolean
}

export default Header;