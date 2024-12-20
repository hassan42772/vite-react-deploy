import { useState, useEffect } from "react";
import "./Github.css";

const locations = {
    lahore: { lat: 40.712776, lng: -74.005974, x: 300, y: 127, imageUrl: "https://www.google.com/maps/vt/data=efifA9qs-6Pe1eSc8duJgwhklzpbymIl4VSJRafoSXeEipJ_0Uvc_S0wrzKGturFIdlKaaw6ndH9meJjbcR27f3hOQSZBURLMX0lbNGA5uoLRKgCFIiScS6QeVsuBOIHKr8mJU2RQIjhxAeWNBOgJfkHuj0kDi1qpixzUDVMPu1do_FXnXh3pwRyZ0ZMVYCk6Pd_1ewHybqrxnBn39den5qO3Wyj42qxfgZ2DdrGFStqgfLOW0Yp0nBNTrztQoGrw1uX34Yt9lJYCYM9BGnTpO6qzMa6Z4EdIteRe5KNtQ" },
    karachi: { lat: 34.052235, lng: -118.243683, x: 250, y: 220, imageUrl: "https://www.google.com/maps/vt/data=fjAPleUZahb3EZRBV7tpQXX0xmr7ptgbpFLu39CCjuPnXew-kVkWVbX66QX9PbZmhowd2E3vQ8RIyXPaEGSbtUeBuDnJG3Vdh-yzm1GYPS0m4HDxm9sDxFEiIdH6B4iwB2XHYTSNbNVmtkHnYPfKTW8dZ8WdBhvQtruWUvztyCq_8EZLrswaMQ7NuFtDIMOoxbZRqvqvNYMEVLZsBTAXha2vgkY_0-di8yuObkeRMc2sHVe3thIePKEAW1Dyh9c1cXs72MqXKYbT8sHPhCcMKmwx3uToGnxfMN5ePrTKlA" },
    multan: { lat: 41.878113, lng: -87.629799, x: 250, y: 150, imageUrl: "https://www.google.com/maps/vt/data=on-V2-HtX8MQN0AVNjyInm6NrMONQyNDwKEsaqw_zlJCZug37heV68CEaFYYVcbd2CazP5pDp1XYdtNaa-7BABTr9r1eG4sqO3m-g-1OIto0WkYBjpnIoAIQ8hzeliwqKhFHHI9V5Qi55Qhk1Y7-vFSJQrS6ZXe04MoL9fqMoc89Du0ZiHZK5lQxFWwouOTQ-sdh42gKx1nqL1W9TvLNXZ_XizDmeoRY1n9PrlbfWV46BT22ZF8d4yUf7g2F2Foiyzq4lhO9v8WiDOFtBZ-ycxDv1EJg9B7GyEyw-FNomw" },
    gurjrawala: { lat: 41.878113, lng: -87.629799, x: 250, y: 150, imageUrl: "https://www.google.com/maps/vt/data=u6hNKmd41Zd-0O_oogIH7nBLsf__HMd0Eoy_gpjo9VJkaVkoKhEs3ENhVDT33sXicBnpRa__lTuCTOQjy_7OWDsO-p_3wO_6BnsE8Z8pyvDbz0xowCMZPOPN44a0dxJPQILfbAJAvhe4v_cPtHjqaIBwyIBk6mLkSu5FvH6aAKYEF2FdppcnZL0IGHtP4B0tviJrDdcyi8Xmhn-GDbk4CqdepmS0O0f9tFt11n6ytBMtqKmouSAGyOWZuRKNFsLrBO0_HYwRD6U8CylJlgeO6bBBBbzuE43dw5A6" }
};

const containerStyle = {
    width: "100%",
    height: "400px"
};

const cityAreas = {
    lahore: ['green town', 'mazang', 'model town', 'johar town', 'dha', 'gulberg', 'samanabad', 'township', 'walled city'],
    karachi: ['korangi', 'gulshan', 'clifton', 'defence', 'saddar'],
    multan: ['cantonment', 'shah rukn e alam', 'bosan road', 'shah shams', 'shah rukn e alam'],
    gurjrawala: ['allama iqbal colony', 'cantonment', 'civil lines', 'satellite town', 'wahdat colony']
};

function ServiceCity() {
    const [selectedLocation, setSelectedLocation] = useState(locations.lahore);
    const [showCities, setShowCities] = useState(false);

    useEffect(() => {
        if (selectedLocation) {
            setShowCities(true);
        } else {
            setShowCities(false);
        }
    }, [selectedLocation]);

    const getCities = () => {
        if (selectedLocation === locations.lahore) {
            return cityAreas.lahore;
        } else if (selectedLocation === locations.karachi) {
            return cityAreas.karachi;
        } else if (selectedLocation === locations.multan) {
            return cityAreas.multan;
        } else if (selectedLocation === locations.gurjrawala) {
            return cityAreas.gurjrawala;
        } else {
            return [];
        }
    };

    return (
        <div className="service-city">
            <h2>Our Service Cities</h2>
            <div className="buttons">
                <button onClick={() => setSelectedLocation(locations.lahore)}>Lahore</button>
                <button onClick={() => setSelectedLocation(locations.karachi)}>Karachi</button>
                <button onClick={() => setSelectedLocation(locations.multan)}>Multan</button>
                <button onClick={() => setSelectedLocation(locations.gurjrawala)}>Gujrawala</button>
            </div>
            <div className="map-container" style={containerStyle}>
                <img
                    src={selectedLocation.imageUrl}
                    alt="Map"
                    className="map-image"
                />
                <div
                    className="marker"
                    style={{
                        left: `${selectedLocation.x}px`,
                        top: `${selectedLocation.y}px`
                    }}
                ><i className="fas fa-map-marker-alt"></i></div>
            </div>
            <div className="area-list">
                <h2>Service Areas</h2>
                {showCities && (
                    <ul>
                        {getCities().map((city, index) => (
                            <li key={index}>{city}</li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}

export default ServiceCity;
