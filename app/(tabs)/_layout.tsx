import { Tabs } from 'expo-router';
import React from 'react';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  // Define default and focused colors for both schemes
  const colors = {
    light: {
      default: '#074100', // Default light mode color
      focused: '#74CC4E', // Focused light mode color
    },
    dark: {
      default: '#1E90FF', // Default dark mode color
      focused: '#FF6347', // Focused dark mode color
    },
  };

  // Determine the current color scheme
  const currentColors = colors[colorScheme ?? 'light'];

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: currentColors.focused,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Map',
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              name={focused ? 'location' : 'location-outline'}
              color={focused ? currentColors.focused : currentColors.default}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Vendors',
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              name={focused ? 'pricetag' : 'pricetag-outline'}
              color={focused ? currentColors.focused : currentColors.default}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="purchases"
        options={{
          title: 'Purchases',
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              name={focused ? 'basket' : 'basket-outline'}
              color={focused ? currentColors.focused : currentColors.default}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="chatlist"
        options={{
          title: 'Chats',
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              name={focused ? 'chatbubbles' : 'chatbubbles-outline'}
              color={focused ? currentColors.focused : currentColors.default}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              name={focused ? 'person' : 'person-outline'}
              color={focused ? currentColors.focused : currentColors.default}
            />
          ),
        }}
      />
    </Tabs>
  );
}
