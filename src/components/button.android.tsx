import {
  Button as ComposeButton,
  Host,
  Icon,
  Row,
  Text,
  TextButton,
} from "@expo/ui/jetpack-compose";
import { StyleSheet, View } from "react-native";

type Props = {
  label: string;
  theme?: "primary";
  onPress?: () => void;
};

const DARK_TEXT = "#25292e";

export default function Button({ label, theme, onPress }: Props) {
  if (theme === "primary") {
    return (
      <View style={styles.buttonContainer}>
        <Host matchContents>
          <ComposeButton
            onClick={onPress}
            colors={{ containerColor: "#ffd33d", contentColor: DARK_TEXT }}
          >
            <Row
              verticalAlignment="center"
              horizontalArrangement={{ spacedBy: 8 }}
            >
              <Icon
                source={require("@expo/material-symbols/image.xml")}
                size={18}
                tint={DARK_TEXT}
              />
              <Text color={DARK_TEXT}>{label}</Text>
            </Row>
          </ComposeButton>
        </Host>
      </View>
    );
  }
  return (
    <View style={styles.buttonContainer}>
      <Host matchContents>
        <TextButton onClick={onPress} colors={{ contentColor: "#fff" }}>
          <Text color="#fff">{label}</Text>
        </TextButton>
      </Host>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 68,
    alignItems: "center",
    justifyContent: "center",
  },
});
