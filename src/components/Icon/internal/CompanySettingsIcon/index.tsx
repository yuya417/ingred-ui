import * as React from "react";
import { IconProps } from "../../Icon";

const CompanySettingsIcon: React.FunctionComponent<IconProps> = ({
  type,
  fill,
}) => {
  switch (type) {
    case "fill":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            fill={fill}
            d="M-4373-336.5v-1.145a3.5,3.5,0,0,1-1.4-.812l-.993.573-1-1.732.992-.573a3.505,3.505,0,0,1,0-1.623l-.992-.573,1-1.732.993.573a3.5,3.5,0,0,1,1.4-.812V-345.5h2v1.145a3.5,3.5,0,0,1,1.4.812l.993-.573,1,1.732-.992.573a3.505,3.505,0,0,1,0,1.623l.992.573-1,1.732-.993-.573a3.508,3.508,0,0,1-1.4.812v1.145Zm0-4.5a1,1,0,0,0,1,1,1,1,0,0,0,1-1,1,1,0,0,0-1-1A1,1,0,0,0-4373-341Zm-5.5,4H-4390v-2h2v-17a1,1,0,0,1,1-1h16a1,1,0,0,1,1,1v7.5h-8.5V-337h0Zm-4.5-5h3v-2h-3Zm0-4h3v-2h-3Zm5-4h3v-2h-3Zm-5,0h3v-2h-3Z"
            transform="translate(4391 359)"
          />
        </svg>
      );
    case "line":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path fill="none" d="M0 0h24v24H0V0z" />
          <path
            fill={fill}
            d="M-4340-336.5v-1.145a3.486,3.486,0,0,1-1.405-.811l-.992.573-1-1.732.992-.572a3.509,3.509,0,0,1,0-1.624l-.992-.573,1-1.732.992.573a3.5,3.5,0,0,1,1.405-.811V-345.5h2v1.145a3.485,3.485,0,0,1,1.4.811l.993-.573,1,1.732-.992.573a3.5,3.5,0,0,1,0,1.623l.992.573-1,1.732-.993-.573a3.487,3.487,0,0,1-1.4.811v1.145Zm-.5-4.5a1.5,1.5,0,0,0,1.5,1.5,1.5,1.5,0,0,0,1.5-1.5,1.5,1.5,0,0,0-1.5-1.5A1.5,1.5,0,0,0-4340.5-341Zm-5,4H-4357v-2h2v-17a1,1,0,0,1,1-1h16a1,1,0,0,1,1,1v7.5h-2V-355h-14v16h7.5v2h0Zm-4.5-5v-2h3v2h-3Zm0-4v-2h3v2h-3Zm8-4h-3v-2h3v2h0Zm-8,0v-2h3v2h-3Z"
            transform="translate(4358 359)"
          />
        </svg>
      );
  }
};

export { CompanySettingsIcon };
