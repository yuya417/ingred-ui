import styled from "styled-components";
import {
  NavigationRailTransitionDuration,
  NavigationRailWidth,
} from "../constants";

export const Container = styled.div<{ isActive: boolean }>`
  cursor: pointer;
  display: flex;
  align-items: center;
  width: ${NavigationRailWidth.WIDE};
  padding: ${({ theme }) =>
    `${theme.spacing * 2}px ${theme.spacing * 2}px ${theme.spacing * 2}px ${
      theme.spacing * 3
    }px`};
  background-color: ${({ isActive, theme }) =>
    isActive ? theme.palette.background.hint : "none"};

  &:hover {
    background-color: ${({ theme }) => theme.palette.gray.light};
  }

  & > * {
    flex-shrink: 0;
  }
`;

export const TextContainer = styled.div<{ isActive: boolean; isOpen: boolean }>`
  flex-shrink: 1;
  flex-grow: 1;
  display: flex;
  align-items: center;
  margin-left: ${({ theme }) => theme.spacing * 1.5}px;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  color: ${({ theme, isActive }) =>
    theme.palette.text[isActive ? "primary" : "secondary"]};
  font-weight: bold;
  transition: opacity ${NavigationRailTransitionDuration}s;
  min-width: 0;
`;

export const TextWrapper = styled.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
