import { useContext, useState } from "react";
import { AuthContex } from "../../../AuthProvider/AuthProvider";
import { NavLink } from "react-router-dom";


const Profile = () => {
    const { user } = useContext(AuthContex);
    const [activeTab, setActiveTab] = useState('tab1'); // Set the initial active tab
    const tabClick = (tabId) => {
        setActiveTab(tabId);
    };

    return (
        <div className="ml-[300px] mt-[100px]">
            <div className="tabs tabs-boxed mr-6" role="tablist">
                <NavLink
                    to="/details"
                    className={`tab ${activeTab === 'tab1' ? 'tab-active' : ''}`}
                    role="tab"
                    onClick={() => tabClick('tab1')}
                >
                    Details
                </NavLink>
                <NavLink
                    to="/devices"
                    className={`tab ${activeTab === 'tab2' ? 'tab-active' : ''}`}
                    role="tab"
                    onClick={() => tabClick('tab2')}
                >
                    Devices
                </NavLink>
                <NavLink
                    to="/tab3"
                    className={`tab ${activeTab === 'tab3' ? 'tab-active' : ''}`}
                    role="tab"
                    onClick={() => tabClick('tab3')}
                >
                    Leave
                </NavLink>
            </div>

            {/* Render different content based on active tab */}
            <div>
                {activeTab === 'tab1' && (
                    <div>
                        {/* Content for Tab 1 */}
                        This is Tab 1 content.
                    </div>
                )}
                {activeTab === 'tab2' && (
                    <div>
                        {/* Content for Tab 2 */}
                        This is Tab 2 content. Its currently active.
                    </div>
                )}
                {activeTab === 'tab3' && (
                    <div>
                        {/* Content for Tab 3 */}
                        This is Tab 3 content.
                    </div>
                )}
            </div>
        </div >

    );
};

export default Profile;