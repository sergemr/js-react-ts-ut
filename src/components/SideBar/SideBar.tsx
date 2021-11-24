import React from "react";
import styles from "./SideBar.module.scss";

const SideBar = ({
  items,
}: {
  items: {
    name: string;
    href: string;
  }[];
}) => {
  return (
    <div role="navigation" className={styles.SideBar} data-testid="SideBar">
      {items && items.map((item) => {
        return(
          <div key={item.name} >
          <a role="menuitem" href={item.href}>{item.name}</a>
          </div>
        )
      })}
    </div>
  );
};

export default SideBar;
