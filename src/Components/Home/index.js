import React, { useState } from 'react';
import ProductList from '../ProductList';
import AddProductForm from '../AddProductForm';
import EditProductForm from '../EditProductForm';
import { Modal, Input, Select } from 'antd';
import { Button } from 'antd';
import './index.css'

const { Search } = Input;
const { Option } = Select;

const initialProducts = [
  { key: 1, name: 'SONY PlayStation 5 console 825 GB (NA)', description: 'Maximize your play sessions with near instant load times for installed PS5 games Enjoy smooth and fluid high frame rate gameplay at up to 120fps for compatible games, with support for 120Hz output on 4K displays.', price: '₹54,990', category: 'Gaming Consoles' },
  { key: 2, name: 'Logitech B175 / Optical Tracking, 12-Months Battery Life, Ambidextrous Wireless Optical Mouse  (2.4GHz Wireless, Black)', description: 'If you are looking for an ergonomically designed wireless mouse, then this Logitech product with 2.4 GHz of connectivity is ideal for you. Furthermore, it’s long-lasting battery lasts for up to 12 months, so you can work with ease and convenience.', price: '₹479', category: 'Gaming Mouse' },
  { key: 3, name: 'ZEBRONICS Zeb Companion 200 Wireless Combo with Silent Operation Mouse, Power Saving Mode Wireless Desktop Keyboard  (Black)', description: 'ZEB-COMPANION 200 wireless keyboard and mouse combo with Silent buttons for the mouse, 1600 DPI, Full size keyboard with 12 Integrated multimedia keys, Energy efficient usage with ON/OFF and power saving mode. Simple plug & play usage with Computers and Laptops using a USB a Nano receiver stored inside the mouse bottom panel.', price: '₹1149', category: 'Gaming keyboards' },
  { key: 4, name: 'NINTENDO Switch OLED Console Pokemon Scarlet and Violet Edition 64 GB  (Black)', description: 'The Nintendo Switch OLED Model features a vibrant 7-inch OLED screen, a wide adjustable stand, a dock with a wired LAN port, 64 GB of internal storage, and enhanced audio. Play anytime, anywhere, with anyone', price: '₹30,990', category: 'Gaming Consoles' },
  { key: 5, name: 'Arctic Fox Wired with Breathing Lights and DPI Upto 3600 Wired Optical Gaming Mouse  (USB 3.0, Blue, Black)', description: '"Your rivals? Time to bring them down! Get ready for the ultimate battle with the all-new gaming mouse from Arctic Fox, with a precise, fast-tracking sensor and a grip that makes you feel like it is molded to your hand. Lets hit the combat zone!" "Tact switch, DPI, Scroll wheel Switch life - 3 million clicks" "1_ Breathing LED light 2_ Up to 3600 DPI tracking 3_ Rubber soft surface grip 4_ Ergonomic Design 5_ Works on most surfaces 6_Hand orientation: Ambidextrous"', price: '₹245', category: 'Gaming Mouse' },
  { key: 6, name: 'MICROSOFT Xbox Series X 1024 GB  (Black)', description: 'Advance to the next level of gaming experience with the powerful and high-speed Microsoft Xbox Series X. This gaming console features 12 Teraflops of graphics processing power and the Xbox Velocity Architecture for high-speed, seamless gaming. Also  it comes with an Xbox Wireless Controller for hassle-free gaming, and it is compatible with Xbox One accessories.', price: '₹46,990', category: 'Gaming Consoles' },
  { key: 7, name: 'ZOTAC NVIDIA GAMING GEFORCE GTX1650 DUAL FAN 4 GB GDDR6 Graphics Card', description: 'The all-new generation of ZOTAC GAMING GeForce GTX graphics cards are here. Based on the new NVIDIA Turing architecture, it’s packed with GDDR6 ultra-fast memory. Get ready to get fast and game strong.', price: '₹10,999', category: 'Gaming Components' },
  { key: 8, name: 'HP Z3700 Dual Wireless Mechanical Mouse  (2.4GHz Wireless, Bluetooth, Silver)', description: 'It has a compact, ambidextrous design. It has a wireless range up to 32.81 ft in an open area. It supports dual-mode wireless connectivity via the included USB-A dongle or connect or Bluetooth 5.0. Compatible with Windows 11, Windows 10, macOS and Chrome OS.', price: '₹1,299', category: 'Gaming Mouse' },
  { key: 9, name: 'COOLER MASTER MWE 450 Bronze 450 Watts PSU  (Black)', description: 'Cooler Master MWE 450 Bronze V2 PSU comes with 80 Plus Bronze certification. It is designed to deliver 450 Watts at a typical minimum efficiency of 85%. The Non-Modular SMPS gives extended connectivity with 6x SATA, 4x 4-Pin, 2x 6 PCI-e+2 Pin connectors, 1x EPS 4+4 Pin Connectors and 1x ATX 24 Pin Connectors giving guaranteed universal compatibility with all major motherboards.', price: '₹3,349', category: 'Gaming Components' },
  { key: 10, name: 'DELL KB 216 Wired USB Desktop Keyboard  (Black)', description: 'Type fast and accomplish a number of tasks on your personal computer with the Dell KB 216 Wired USB Desktop Keyboard. The full layout of this keyboard features chiclet-style keys for comfortable and efficient typing.', price: '₹869', category: 'Gaming keyboards' },
  { key: 11, name: 'ASUS Marshmallow MD100 / Multi-Mode Connect, Adj. DPI upto 1600 DPI, Silent Wireless Optical Mouse with Bluetooth  (Grey)', description: 'Marshmallow MD100 / Multi-Mode Connect, Adj. DPI upto 1600 DPI, Silent System Requirements Windows 10, Chrome OS, Windows 11, Mac OS 12 Sales Package1 Mouse, Dongle, Battery, Quick Start Guide, Warranty Booklet, Mouse Cover Resolution 1600 dpi', price: '₹1,099', category: 'Gaming Mouse' },
  { key: 12, name: 'Ant Esports Superflow 120 Auto RGB V2 1200 RPM Case Fan/Cooler Cooler  (Black)', description: 'The Ant Esports Superflow 120 Auto RGB V2 is aimed at offering uncompromised performance without blowing a hole in your packet. These 120mm fans comes rated at 1200 RPM and 38 CFM with just 20 dBA of noise levels thanks to their rubber shims to deliver the best silent cooling performance.', price: '₹645', category: 'Gaming Components' },
  { key: 13, name: 'Like Star Best SUP 400 in 1 Retro Game Box Console Handheld Classical Game PAD box s6 with TV output Gaming Console 8 GB with Mario/Super Mario/DR Mario/Contra/Turtles and other 400 Games 8 GB with Super Mario, DR Mario, Mario, Contra, Turtles, Tank, Bomber Man, Aladdin, Total 400 Games  (Red)', description: 'Product Color may Be Different Showing In The Photo Built-in 400 games . It will take you back to your childhood Digital multi-platform device , can play on TV,batteries included Come with a rechargeable lithium battery and a USB cable , 6 hours of continuous game play Convenient size and Lightweight, it is perfect for playing travel or on the go', price: '₹999', category: 'Gaming Consoles' },
  { key: 14, name: 'Portronics POR 1880 Bluetooth, Wireless Gaming Keyboard  (Blue Switch, White)', description: 'This wireless keyboard is here to slay all your herculean tasks. Presenting Hydra 10 wireless keyboard with 2-way wireless connection. Connect over Bluetooth 5.0 or 2.4 GHz with a USB nano dongle. The mechanical keyboard has linear red keys that come in handy for typing, programming, and playing strategy games.', price: '₹1,999', category: 'Gaming keyboards' },

];

const Home = () => {
    const [products, setProducts] = useState(initialProducts);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [editProduct, setEditProduct] = useState(null);
    const [searchText, setSearchText] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
  
    const handleDelete = (key) => {
      setProducts(products.filter((product) => product.key !== key));
    };
  
    const handleAdd = (values) => {
      const newProduct = {
        key: Date.now(),
        ...values,
      };
      setProducts([...products, newProduct]);
      setIsModalVisible(false);
    };
  
    const handleEdit = (product) => {
      setEditProduct(product);
      setIsModalVisible(true);
    };
  
    const handleEditFinish = (values) => {
      setProducts(
        products.map((product) =>
          product.key === editProduct.key ? { ...product, ...values } : product
        )
      );
      setIsModalVisible(false);
      setEditProduct(null);
    };
  
    const handleSearch = (e) => {
      setSearchText(e.target.value);
    };
  
    const handleCategoryChange = (value) => {
      setSelectedCategory(value);
    };
  
    const filteredProducts = products.filter((product) => {
      return (
        product.name.toLowerCase().includes(searchText.toLowerCase()) &&
        (selectedCategory === '' || product.category === selectedCategory)
      );
    });
  
    return (
        <div className="container">
          <h1 className="header">Product Management Application</h1>
          <div className="filters">
            <Search
              placeholder="Search by name"
              onChange={handleSearch}
              className="filter-item"
            />
            <Select
              placeholder="Select category"
              onChange={handleCategoryChange}
              allowClear
              className="filter-item"
            >
              <Option value="Gaming Consoles">Gaming Consoles</Option>
              <Option value="Gaming Mouse">Gaming Mouse</Option>
              <Option value="Gaming keyboards">Gaming keyboards</Option>
              <Option value="Gaming Components">Gaming Components</Option>
            </Select>
            <Button
              type="primary"
              onClick={() => setIsModalVisible(true)}
              className="filter-item"
            >
              Add Product
            </Button>
          </div>
          <ProductList
            products={filteredProducts}
            onDelete={handleDelete}
            onEdit={handleEdit}
            className='all-list-items'
          />
          <Modal
            title={editProduct ? 'Edit Product' : 'Add Product'}
            visible={isModalVisible}
            onCancel={() => {
              setIsModalVisible(false);
              setEditProduct(null);
            }}
            footer={null}
          >
            {editProduct ? (
              <EditProductForm product={editProduct} onFinish={handleEditFinish} />
            ) : (
              <AddProductForm onFinish={handleAdd} />
            )}
          </Modal>
        </div>
      );
};

export default Home;