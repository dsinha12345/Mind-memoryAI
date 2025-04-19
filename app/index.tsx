import { Redirect } from 'expo-router';

export default function Index() {
  // Redirect to the tabs navigator
  return <Redirect href="/screens/HomeScreen" />;
}
