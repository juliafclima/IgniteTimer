import { NavLink } from "react-router-dom";
import { ClockCounterClockwise , Alarm } from "phosphor-react";

import { HeaderContainer } from "./styles";

import logoIgnite from "../../assets/ignite-logo.svg";

export function Header() {
  return (
    <HeaderContainer>
      <span>
        <img src={logoIgnite} alt="Logo IgniteTimer" />
      </span>

      <nav>
        <NavLink to="/" title="Timer">
          <Alarm  size={24} />
        </NavLink>

        <NavLink to="/history" title="Histórico">
          <ClockCounterClockwise  size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}
