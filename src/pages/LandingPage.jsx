import { MoviesGrid } from "../Components/MoviesGrid";
import { Search } from "../Components/Search";
import FilterDropdown from "../Components/FilterDropdown";
import { useQuery } from "../hooks/useQuery";


export function LandingPage() {
  const query = useQuery();
  const search = query.get("search");

  const genresOptions = [
    { id: 28, label: "Action", link: "/movies-by-genre/28" },
   { id: 12, label: "Adventure", link: "/movies-by-genre/12" },
    { id: 16, label: "Animation", link: "/movies-by-genre/16" },
    { id: 35, label: "Comedy", link: "/movies-by-genre/35" },
    { id: 80, label: "Crime", link: "/movies-by-genre/80" },
    { id: 99, label: "Documentary", link: "/movies-by-genre/99" },
    { id: 18, label: "Drama", link: "/movies-by-genre/18" },
    { id: 10751, label: "Family", link: "/movies-by-genre/10751" },
    { id: 14, label: "Fantasy", link: "/movies-by-genre/14" },
    { id: 36, label: "History", link: "/movies-by-genre/36" },
    { id: 27, label: "Horror", link: "/movies-by-genre/27" },
    { id: 10402, label: "Music", link: "/movies-by-genre/10402" },
    { id:9648, label: "Mystery", link: "/movies-by-genre/9648" },
    { id:10749, label: "Romance", link: "/movies-by-genre/10749" },
    { id:878, label: "Science Fiction", link: "/movies-by-genre/878" },
    { id:10770, label: "TV Movie", link: "/movies-by-genre/10770" },
    { id:53, label: "Thriller", link: "/movies-by-genre/53" },
    { id:10752, label: "War", link: "/movies-by-genre/10752" },
    { id:37, label: "Western", link: "/movies-by-genre/37" },
    


   
  ];
  
  const nationalityOptions = [
    { id: "AF", label: "Afghanistan", link: "/movies-by-nationality/AF" },
    { id: "AL", label: "Albania", link: "/movies-by-nationality/AL" },
    { id: "DZ", label: "Algeria", link: "/movies-by-nationality/DZ" },
    { id: "AR", label: "Argentina", link: "/movies-by-nationality/AR" },
    { id: "AM", label: "Armenia", link: "/movies-by-nationality/AM" },
    { id: "AU", label: "Australia", link: "/movies-by-nationality/AU" },
    { id: "AT", label: "Austria", link: "/movies-by-nationality/AT" },
    { id: "AZ", label: "Azerbaijan", link: "/movies-by-nationality/AZ" },
    { id: "BD", label: "Bangladesh", link: "/movies-by-nationality/BD" },
    { id: "BB", label: "Barbados", link: "/movies-by-nationality/BB" },
    { id: "BY", label: "Belarus", link: "/movies-by-nationality/BY" },

    { id: "BE", label: "Belgium", link: "/movies-by-nationality/BE" },
    { id: "BO", label: "Bolivia", link: "/movies-by-nationality/BO" },
    { id: "BA", label: "Bosnia", link: "/movies-by-nationality/BA" },
    { id: "BR", label: "Brazil", link: "/movies-by-nationality/BR" },
    { id: "BG", label: "Bulgaria", link: "/movies-by-nationality/BG" },
    { id: "KH", label: "Cambodia", link: "/movies-by-nationality/KH" },
    { id: "CM", label: "Cameroon", link: "/movies-by-nationality/CM" },
    { id: "CA", label: "Canada", link: "/movies-by-nationality/CA" },
    { id: "AR", label: "Argentina", link: "/movies-by-nationality/AR" },
    { id: "CL", label: "Chile", link: "/movies-by-nationality/CL" },
    { id: "CN", label: "China", link: "/movies-by-nationality/CN" },
    { id: "CO", label: "Colombia", link: "/movies-by-nationality/CO" },
    { id: "HR", label: "Croatia", link: "/movies-by-nationality/HR" },
    { id: "CU", label: "Cuba", link: "/movies-by-nationality/CU" },

    { id: "CY", label: "Cyprus", link: "/movies-by-nationality/CY" },
    { id: "CZ", label: "Czechia", link: "/movies-by-nationality/CZ" },
    { id: "DK", label: "Denmark", link: "/movies-by-nationality/DK" },
    { id: "DO", label: "Dominican Republic", link: "/movies-by-nationality/DO" },
    { id: "EC", label: "Ecuador", link: "/movies-by-nationality/EC" },
    { id: "EG", label: "Egypt", link: "/movies-by-nationality/EG" },
    { id: "SV", label: "El Salvador", link: "/movies-by-nationality/SV" },
    { id: "EE", label: "Estonia", link: "/movies-by-nationality/EE" },
    { id: "FI", label: "Finland", link: "/movies-by-nationality/FI" },
    { id: "FR", label: "France", link: "/movies-by-nationality/FR" },
    { id: "DE", label: "Germany", link: "/movies-by-nationality/DE" },
    { id: "GR", label: "Greece", link: "/movies-by-nationality/GR" },
    { id: "HT", label: "Haiti", link: "/movies-by-nationality/HT" }, 
     { id: "HN", label: "Honduras", link: "/movies-by-nationality/HN" },
     { id: "HK", label: "Hong Kong", link: "/movies-by-nationality/HK" },
     { id: "HU", label: "Hungary", link: "/movies-by-nationality/HU" },
     { id: "IS", label: "Iceland", link: "/movies-by-nationality/IS" },
     { id: "IN", label: "India", link: "/movies-by-nationality/IN" },
     { id: "ID", label: "Indonesia", link: "/movies-by-nationality/ID" },
     { id: "IR", label: "Iran", link: "/movies-by-nationality/IR" },
     { id: "IQ", label: "Iraq", link: "/movies-by-nationality/IQ" },
     { id: "IL", label: "Israel", link: "/movies-by-nationality/IL" },

     { id: "IT", label: "Italy", link: "/movies-by-nationality/IT" },
     { id: "JP", label: "Japan", link: "/movies-by-nationality/JP" },
     { id: "JO", label: "Jordan", link: "/movies-by-nationality/JO" },
     { id: "KP", label: "Korea", link: "/movies-by-nationality/KP" },
     { id: "LV", label: "Latvia", link: "/movies-by-nationality/LV" },
     { id: "LB", label: "Lebanon", link: "/movies-by-nationality/LB" },
     { id: "MX", label: "Mexico", link: "/movies-by-nationality/MX" },

     { id: "MA", label: "Morocco", link: "/movies-by-nationality/MA" },
     { id: "NL", label: "Netherlands", link: "/movies-by-nationality/NL" },
     { id: "NZ", label: "New Zeland", link: "/movies-by-nationality/NZ" },
     { id: "NO", label: "Norway", link: "/movies-by-nationality/NO" },
     { id: "PK", label: "Pakistan", link: "/movies-by-nationality/PK" },
     { id: "PE", label: "Peru", link: "/movies-by-nationality/PE" },
     { id: "PH", label: "Philippines", link: "/movies-by-nationality/PH" },
     { id: "PL", label: "Poland", link: "/movies-by-nationality/PL" },
     { id: "PT", label: "Portugal", link: "/movies-by-nationality/PT" },
     { id: "RO", label: "Romania", link: "/movies-by-nationality/RO" },

     { id: "RU", label: "Russia", link: "/movies-by-nationality/RU" },
     { id: "RS", label: "Serbia", link: "/movies-by-nationality/RS" },
     { id: "SG", label: "Singapore", link: "/movies-by-nationality/SG" },
     { id: "SK", label: "Slovakia", link: "/movies-by-nationality/SK" },

     { id: "SI", label: "Slovenia", link: "/movies-by-nationality/SI" },
     { id: "ZA", label: "South Africa", link: "/movies-by-nationality/ZA" },
     { id: "ES", label: "Spain", link: "/movies-by-nationality/ES" },

     { id: "LK", label: "Sri Lanka", link: "/movies-by-nationality/LK" },
     { id: "SE", label: "Sweden", link: "/movies-by-nationality/SE" },
     { id: "CH", label: "Switzerland", link: "/movies-by-nationality/CH" },

     { id: "TW", label: "Taiwan", link: "/movies-by-nationality/TW" },
     { id: "TH", label: "Thailand", link: "/movies-by-nationality/TH" },
     { id: "TN", label: "Tunisia", link: "/movies-by-nationality/TN" },
     { id: "TR", label: "Turkey", link: "/movies-by-nationality/TR" },
      { id: "UA", label: "Ukraine", link: "/movies-by-nationality/UA" },
     { id: "GB", label: "Reino Unido", link: "/movies-by-nationality/GB" },
     { id: "US", label: "EE. UU.", link: "/movies-by-nationality/US" },
    { id: "UY", label: "Uruguay", link: "/movies-by-nationality/UY" },
    { id: "VE", label: "Venezuela", link: "/movies-by-nationality/VE" },
    { id: "ZW", label: "Zimbabwe", link: "/movies-by-nationality/ZW" },
   
   
  ];
 
  return (
    <div>
      <Search />
      <div style={{ display: "flex", justifyContent: "flex-end", margin: "10px" }}>
        <FilterDropdown title="Genre" options={genresOptions} />
        <FilterDropdown title="Nationality" options={nationalityOptions} />
      </div>
      <MoviesGrid key={search} search={search}/>
    </div>
  );
}
