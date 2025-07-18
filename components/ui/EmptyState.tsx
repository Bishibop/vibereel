import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';
import { theme } from '../../constants/theme';
import { IconKey } from '../../constants/icons';
import Icon from './Icon';

interface EmptyStateProps {
  icon?: IconKey;
  title: string;
  subtitle?: string;
  style?: ViewStyle;
}

export default function EmptyState({ icon, title, subtitle, style }: EmptyStateProps) {
  return (
    <View style={[styles.container, style]}>
      {icon && <Icon name={icon} size={48} color={theme.colors.primary} style={styles.icon} />}
      <Text style={styles.title}>{title}</Text>
      {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: theme.spacing.xl,
    paddingVertical: theme.spacing.xl,
  },
  icon: {
    marginBottom: theme.spacing.md,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: theme.colors.text,
    textAlign: 'center',
    marginBottom: theme.spacing.sm,
  },
  subtitle: {
    fontSize: 14,
    color: theme.colors.textSecondary,
    textAlign: 'center',
    lineHeight: 20,
  },
});
