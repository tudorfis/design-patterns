import { ImageView } from "./adapter-demo/ImageView";
import { Image } from "./adapter-demo/Image";
import { VividFilter } from "./adapter-demo/VividFilter";
import { Caramel } from "./adapter-demo/avaFilters/Caramel";
import { AvaFilterAdapter } from "./adapter-demo/AvaFilterAdapter";
import { Chocolate } from "./adapter-demo/avaFilters/Chocolate";

const imageView = new ImageView(new Image());
imageView.apply(new VividFilter());
imageView.apply(new AvaFilterAdapter(new Caramel()));
imageView.apply(new AvaFilterAdapter(new Chocolate()));

// Exercise

// Create an adapter to be able to implement filters 
// from avaFilters in our existing photo application