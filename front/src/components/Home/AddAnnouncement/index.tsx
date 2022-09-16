import React from "react";
import AddSearchIcon from "../../../assets/icons/AddSearch";
import { useTheme } from "../../../context/Theme";
import { colors } from "../../../theme/colors";
import { Button } from "../../ui/Button";
import { Paper } from "../../ui/Paper";
import { GradientBorder } from "../../ui/Paper/GradientBorder";
import { H3 } from "../../ui/Texts/H3";
import { P } from "../../ui/Texts/P";
import { ButtonsContainer } from "./ui/ButtonsContainer";
import { ContentDiv } from "./ui/ContentDiv";

export function AddAnnouncement() {
  const { themeIsDark } = useTheme();

  return (
    <GradientBorder fullwidth>
      <Paper fullwidth>
        <ContentDiv>
          <div>
            <H3 marginBottom="10px">{`Não encontrou seu duo?`}</H3>
            <P
              fontWeight={400}
              color={
                themeIsDark
                  ? colors.dark.textSecondary
                  : colors.light.textSecondary
              }
            >{`Publique um anúncio para encontrar novos players!`}</P>
          </div>
          <ButtonsContainer>
            <Button width="12rem" isOutlined padding={"16px"}>
              {`Ver anúncios`}
            </Button>
            <Button width="12rem" padding={"16px"}>
              <AddSearchIcon isDark={themeIsDark} />
              {`Publicar anúncio`}
            </Button>
          </ButtonsContainer>
        </ContentDiv>
      </Paper>
    </GradientBorder>
  );
}
