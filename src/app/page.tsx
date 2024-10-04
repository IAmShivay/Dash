import Sidebar from "../components/Sidebar";
import styles from "../Styles/Home.module.css"; // Assuming you have a CSS module for layout
import SearchBar from "../components/searchbar";
export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <Sidebar />
      <SearchBar />
    </div>
  );
}
