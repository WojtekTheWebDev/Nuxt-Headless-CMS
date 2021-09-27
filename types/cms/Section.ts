import Theme from 'types/cms/Theme'

interface Section {
  title?: string;
  theme: Theme;
  contentBlocks: any[];
  fillHeight?: boolean;
  backgroundImage?: string;
}

export default Section
