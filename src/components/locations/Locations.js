import React, { useEffect } from "react";
import "./Locations.css";
import swal from "sweetalert";

const alert = () => {
  return swal(
    "THIS IS NOT A REAL RESTAURANT!",
    "I used a local restaurant for location details. "
  );
};

const Locations = () => {
  useEffect(() => {
    alert();
  }, []);

  return (
    <div className="locations">
      <div className="locationsWrapper">
        <h1>Locations</h1>
        <button>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.google.com/search?rlz=1C1CHBF_enUS846US846&tbm=lcl&ei=DYkeXfr9D4-3tQa3xYPQAQ&q=Mi+Cocina&oq=Mi+Cocina&gs_l=psy-ab.3...0.0.0.492309.0.0.0.0.0.0.0.0..0.0....0...1c..64.psy-ab..0.0.0....0.xkHrQhHwzeM#rlfi=hd:;si:;mv:!1m2!1d33.124041!2d-96.66475150000001!2m2!1d32.8194565!2d-97.0128743!3m12!1m3!1d147835.29179950632!2d-96.8388129!3d32.971748749999996!2m3!1f0!2f0!3f0!3m2!1i254!2i265!4f13.1;tbs:lrf:!2m1!1e3!2m1!1e16!3sIAE,lf:1,lf_ui:4"
          >
            View All Locations
          </a>
        </button>
        <div classname="location">
          <h2>Mi Cocina</h2>
          <h3>Lakeside Market 4001 Preston Rd Ste 502</h3>
          <h5>(469) 467-8655</h5>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.google.com/search?rlz=1C1CHBF_enUS846US846&tbm=lcl&ei=8IgeXYvnLoqstQbJ8ImAAQ&q=Mi+Cocina&oq=Mi+Cocina&gs_l=psy-ab.3..0l2j0i67k1l2j0l6.26023.26023.0.26941.1.1.0.0.0.0.186.186.0j1.1.0....0...1c.1.64.psy-ab..0.1.183....0.Iz5k4JELIn8#rlfi=hd:;si:2105475501929269926,l,CglNaSBDb2NpbmEiA4gBAVoLCgltaSBjb2NpbmE;mv:!1m2!1d33.143984564669296!2d-96.58750064414062!2m2!1d32.693241889922476!2d-96.95691592734374!4m2!1d32.918900182549685!2d-96.77220828574218!5i11"
          >
            View on Google
          </a>
        </div>
        <div classname="location">
          <h2>Mi Cocina</h2>
          <h3>Lakeside Market 4001 Preston Rd Ste 502</h3>
          <h5>(469) 467-8655</h5>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.google.com/search?rlz=1C1CHBF_enUS846US846&tbm=lcl&ei=8IgeXYvnLoqstQbJ8ImAAQ&q=Mi+Cocina&oq=Mi+Cocina&gs_l=psy-ab.3..0l2j0i67k1l2j0l6.26023.26023.0.26941.1.1.0.0.0.0.186.186.0j1.1.0....0...1c.1.64.psy-ab..0.1.183....0.Iz5k4JELIn8#rlfi=hd:;si:8723266378538811805,l,CglNaSBDb2NpbmEiA4gBAVoLCgltaSBjb2NpbmE;mv:!1m2!1d33.143984564669296!2d-96.58750064414062!2m2!1d32.693241889922476!2d-96.95691592734374!4m2!1d32.918900182549685!2d-96.77220828574218!5i11"
          >
            View on Google
          </a>
        </div>
        <div classname="location">
          <h2>Mi Cocina</h2>
          <h3>6740 Winning Drive</h3>
          <h5>(469) 850-0999</h5>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.google.com/search?rlz=1C1CHBF_enUS846US846&tbm=lcl&ei=8IgeXYvnLoqstQbJ8ImAAQ&q=Mi+Cocina&oq=Mi+Cocina&gs_l=psy-ab.3..0l2j0i67k1l2j0l6.26023.26023.0.26941.1.1.0.0.0.0.186.186.0j1.1.0....0...1c.1.64.psy-ab..0.1.183....0.Iz5k4JELIn8#rlfi=hd:;si:8723266378538811805,l,CglNaSBDb2NpbmEiA4gBAVoLCgltaSBjb2NpbmE;mv:!1m2!1d33.143984564669296!2d-96.58750064414062!2m2!1d32.693241889922476!2d-96.95691592734374!4m2!1d32.918900182549685!2d-96.77220828574218!5i11"
          >
            View on Google
          </a>
        </div>
        <button>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.google.com/search?rlz=1C1CHBF_enUS846US846&tbm=lcl&ei=DYkeXfr9D4-3tQa3xYPQAQ&q=Mi+Cocina&oq=Mi+Cocina&gs_l=psy-ab.3...0.0.0.492309.0.0.0.0.0.0.0.0..0.0....0...1c..64.psy-ab..0.0.0....0.xkHrQhHwzeM#rlfi=hd:;si:;mv:!1m2!1d33.124041!2d-96.66475150000001!2m2!1d32.8194565!2d-97.0128743!3m12!1m3!1d147835.29179950632!2d-96.8388129!3d32.971748749999996!2m3!1f0!2f0!3f0!3m2!1i254!2i265!4f13.1;tbs:lrf:!2m1!1e3!2m1!1e16!3sIAE,lf:1,lf_ui:4"
          >
            View All Locations
          </a>
        </button>
      </div>
    </div>
  );
};

export default Locations;
