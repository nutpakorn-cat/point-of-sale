<main>
	<Router>
		<Route path="/">
			<HomeScreen />
		</Route>
		<Route path="/login">
			<LoginScreen />
		</Route>
		<Route path="/manage">
			<Navbar />
			<ManageScreen />
		</Route>
		<Route path="/checkout">
			<Navbar />
			<CheckOutScreen />
		</Route>
		<Route path="/success">
			<Navbar />
			<SuccessScreen />
		</Route>
		<Route path="/history">
			<Navbar />
			<HistoryScreen />
		</Route>
		<Route path="/inventory">
			<Navbar />
			<InventoryScreen />
		</Route>
		<Route path="/member">
			<Navbar />
			<MemberScreen />
		</Route>
		<Route path="/discount">
			<Navbar />
			<DiscountScreen />
		</Route>
		<Route path="/report">
			<Navbar />
			<ReportScreen />
		</Route>
		<Route path="/setting">
			<Navbar />
			<SettingScreen />
		</Route>
		<Route path="/logout">
			<LogoutScreen />
		</Route>
	</Router>
</main>

<script>
	import { Router, Route } from "svelte-navigator";

	import HomeScreen from './screens/HomeScreen.svelte';
	import LoginScreen from './screens/LoginScreen.svelte';
	import ManageScreen from './screens/ManageScreen.svelte';
	import HistoryScreen from './screens/HistoryScreen.svelte';
	import InventoryScreen from './screens/InventoryScreen.svelte';
	import MemberScreen from './screens/MemberScreen.svelte';
	import DiscountScreen from './screens/DiscountScreen.svelte';
	import ReportScreen from './screens/ReportScreen.svelte';
	import SettingScreen from './screens/SettingScreen.svelte';
	import LogoutScreen from './screens/LogoutScreen.svelte';
	import CheckOutScreen from './screens/CheckOutScreen.svelte';
	import SuccessScreen from './screens/SuccessScreen.svelte';

	import Navbar from './components/Navbar.svelte';
</script>
