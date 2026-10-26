import { BottomSheet, RNHostView } from "@expo/ui";
import { PropsWithChildren } from "react";
import { StyleSheet, Text, View } from "react-native";

type Props = PropsWithChildren<{
  isVisible: boolean;
  onClose: () => void;
}>;

export default function EmojiPicker({ isVisible, onClose, children }: Props) {
  return (
    <BottomSheet
      isPresented={isVisible}
      onDismiss={onClose}
      snapPoints={["half"]}
      containerColor="#25292e"
    >
      <RNHostView>
        <View>
          <Text style={styles.title}>Choose a sticker</Text>
          {children}
        </View>
      </RNHostView>
    </BottomSheet>
  );
}

const styles = StyleSheet.create({
  title: {
    color: "#fff",
    fontSize: 16,
    marginBottom: 20,
  },
});
