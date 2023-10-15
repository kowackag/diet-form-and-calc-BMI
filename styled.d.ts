import "styled-components";

import { Theme } from "common/theme/theme.interface";

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
