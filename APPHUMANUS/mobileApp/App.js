import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//pages
import { AuthScreen2 } from "./screens";
import { Home } from "./screens";

import {ProfilePage} from "./screens";
//wrap all your pages in this router
export default function App() {
  return (
    <Router>
      <Routes>
        {/* keep adding routes to new pages */}
        {/* <Route exact path="/" component={home} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/authscreen2" element={<AuthScreen2 />} />
        <Route path="/profile" element={<ProfilePage />}/>
      </Routes>
    </Router>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
