import {
  Switch,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
  Platform,
} from "react-native";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import Ionicons from "@expo/vector-icons/Ionicons";
import useTheme from "@/hooks/useTheme";

// ─── Types ────────────────────────────────────────────────────────────────────
interface SettingRowProps {
  icon: React.ComponentProps<typeof Ionicons>["name"];
  label: string;
  sublabel?: string;
  onPress?: () => void;
  right?: React.ReactNode;
  danger?: boolean;
}

interface SettingSectionProps {
  title: string;
  children: React.ReactNode;
}

// ─── Sub-components ───────────────────────────────────────────────────────────
const SettingRow = ({
  icon,
  label,
  sublabel,
  onPress,
  right,
  danger,
}: SettingRowProps) => {
  const { colors } = useTheme();

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={onPress ? 0.7 : 1}
      style={[
        styles.row,
        { borderBottomColor: colors.borders + "55" },
      ]}
    >
      {/* Icon bubble */}
      <View
        style={[
          styles.iconBubble,
          {
            backgroundColor: danger
              ? "#ff4d4d22"
              : colors.interface + "22",
          },
        ]}
      >
        <Ionicons
          name={icon}
          size={18}
          color={danger ? "#ff4d4d" : colors.interface}
        />
      </View>

      {/* Labels */}
      <View style={styles.rowLabels}>
        <Text
          style={[
            styles.rowLabel,
            { color: danger ? "#ff4d4d" : colors.text },
          ]}
        >
          {label}
        </Text>
        {sublabel && (
          <Text style={[styles.rowSublabel, { color: colors.textMuted }]}>
            {sublabel}
          </Text>
        )}
      </View>

      {/* Right slot */}
      <View style={styles.rowRight}>
        {right ?? (
          onPress && (
            <Ionicons
              name="chevron-forward"
              size={16}
              color={colors.textMuted}
            />
          )
        )}
      </View>
    </TouchableOpacity>
  );
};

const SettingSection = ({ title, children }: SettingSectionProps) => {
  const { colors } = useTheme();

  return (
    <View style={styles.section}>
      <Text style={[styles.sectionTitle, { color: colors.textMuted }]}>
        {title.toUpperCase()}
      </Text>
      <View
        style={[
          styles.sectionCard,
          {
            backgroundColor: colors.Backgrounds.Input,
            borderColor: colors.borders + "44",
          },
        ]}
      >
        {children}
      </View>
    </View>
  );
};

// ─── Main Screen ──────────────────────────────────────────────────────────────
export default function Settings() {
  const { isDarkMode, toggleDarkMode, colors } = useTheme();

  const [notifications, setNotifications] = useState(true);
  const [emailUpdates, setEmailUpdates] = useState(false);
  const [biometrics, setBiometrics] = useState(true);
  const [dataSync, setDataSync] = useState(true);

  return (
    <View style={[styles.container, { backgroundColor: colors.bg }]}>
      <StatusBar style={isDarkMode ? "light" : "dark"} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scroll}
      >
        {/* ── Header ── */}
        <Text style={[styles.pageTitle, { color: colors.text }]}>Settings</Text>

        {/* ── Profile Card ── */}
        <TouchableOpacity
          activeOpacity={0.85}
          style={[
            styles.profileCard,
            {
              backgroundColor: colors.Backgrounds.Input,
              borderColor: colors.borders + "44",
            },
          ]}
        >
          <View
            style={[
              styles.avatar,
              { backgroundColor: colors.interface + "33" },
            ]}
          >
            <Ionicons name="person" size={32} color={colors.interface} />
          </View>
          <View style={styles.profileInfo}>
            <Text style={[styles.profileName, { color: colors.text }]}>
              John Doe
            </Text>
            <Text style={[styles.profileEmail, { color: colors.textMuted }]}>
              johndoe@email.com
            </Text>
          </View>
          <View
            style={[
              styles.editBadge,
              { backgroundColor: colors.interface + "22" },
            ]}
          >
            <Ionicons name="pencil" size={14} color={colors.interface} />
          </View>
        </TouchableOpacity>

        {/* ── Appearance ── */}
        <SettingSection title="Appearance">
          <SettingRow
            icon={isDarkMode ? "moon" : "sunny"}
            label="Dark Mode"
            sublabel={isDarkMode ? "Dark theme active" : "Light theme active"}
            right={
              <Switch
                value={isDarkMode}
                onValueChange={toggleDarkMode}
                trackColor={{
                  false: colors.borders,
                  true: colors.interface,
                }}
                thumbColor={colors.primary}
              />
            }
          />
        </SettingSection>
        

        {/* ── Notifications ── */}
        <SettingSection title="Notifications">
          <SettingRow
            icon="notifications"
            label="Push Notifications"
            sublabel="Alerts, reminders & updates"
            right={
              <Switch
                value={notifications}
                onValueChange={setNotifications}
                trackColor={{ false: colors.borders, true: colors.interface }}
                thumbColor={colors.primary}
              />
            }
          />
          <SettingRow
            icon="mail"
            label="Email Updates"
            sublabel="Weekly digest & promotions"
            right={
              <Switch
                value={emailUpdates}
                onValueChange={setEmailUpdates}
                trackColor={{ false: colors.borders, true: colors.interface }}
                thumbColor={colors.primary}
              />
            }
          />
        </SettingSection>

        {/* ── Security ── */}
        <SettingSection title="Security">
          <SettingRow
            icon="finger-print"
            label="Biometric Login"
            sublabel="Face ID / Fingerprint"
            right={
              <Switch
                value={biometrics}
                onValueChange={setBiometrics}
                trackColor={{ false: colors.borders, true: colors.interface }}
                thumbColor={colors.primary}
              />
            }
          />
          <SettingRow
            icon="lock-closed"
            label="Change Password"
            onPress={() => {}}
          />
          <SettingRow
            icon="shield-checkmark"
            label="Two-Factor Authentication"
            sublabel="Add an extra layer of security"
            onPress={() => {}}
          />
        </SettingSection>

        {/* ── Data & Storage ── */}
        <SettingSection title="Data & Storage">
          <SettingRow
            icon="cloud-upload"
            label="Auto Sync"
            sublabel="Keep your data backed up"
            right={
              <Switch
                value={dataSync}
                onValueChange={setDataSync}
                trackColor={{ false: colors.borders, true: colors.interface }}
                thumbColor={colors.primary}
              />
            }
          />
          <SettingRow
            icon="trash"
            label="Clear Cache"
            sublabel="Free up local storage"
            onPress={() => {}}
          />
        </SettingSection>

        {/* ── About ── */}
        <SettingSection title="About">
          <SettingRow
            icon="document-text"
            label="Terms of Service"
            onPress={() => {}}
          />
          <SettingRow
            icon="lock-closed"
            label="Privacy Policy"
            onPress={() => {}}
          />
          <SettingRow
            icon="information-circle"
            label="App Version"
            right={
              <Text style={[styles.versionText, { color: colors.textMuted }]}>
                v1.0.0
              </Text>
            }
          />
        </SettingSection>

        {/* ── Danger Zone ── */}
        <SettingSection title="Account">
          <SettingRow
            icon="log-out"
            label="Log Out"
            danger
            onPress={() => {}}
          />
          <SettingRow
            icon="person-remove"
            label="Delete Account"
            sublabel="This action is irreversible"
            danger
            onPress={() => {}}
          />
        </SettingSection>

        <View style={styles.footer}>
          <Text style={[styles.footerText, { color: colors.textMuted }]}>
            Made with ♥ · All rights reserved
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

// ─── Styles ───────────────────────────────────────────────────────────────────
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scroll: {
    paddingHorizontal: 20,
    paddingTop: Platform.OS === "ios" ? 60 : 40,
    paddingBottom: 120,
  },
  pageTitle: {
    fontSize: 32,
    fontWeight: "800",
    marginBottom: 24,
    letterSpacing: -0.5,
  },

  // Profile card
  profileCard: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
    marginBottom: 28,
    gap: 14,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    fontSize: 17,
    fontWeight: "700",
  },
  profileEmail: {
    fontSize: 13,
    marginTop: 2,
  },
  editBadge: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },

  // Section
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 11,
    fontWeight: "700",
    letterSpacing: 1.2,
    marginBottom: 8,
    marginLeft: 4,
  },
  sectionCard: {
    borderRadius: 16,
    borderWidth: 1,
    overflow: "hidden",
  },

  // Row
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderBottomWidth: 1,
    gap: 14,
  },
  iconBubble: {
    width: 36,
    height: 36,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  rowLabels: {
    flex: 1,
  },
  rowLabel: {
    fontSize: 15,
    fontWeight: "600",
  },
  rowSublabel: {
    fontSize: 12,
    marginTop: 2,
  },
  rowRight: {
    alignItems: "flex-end",
  },
  versionText: {
    fontSize: 13,
    fontWeight: "500",
  },

  // Footer
  footer: {
    alignItems: "center",
    marginTop: 8,
  },
  footerText: {
    fontSize: 12,
  },
});
