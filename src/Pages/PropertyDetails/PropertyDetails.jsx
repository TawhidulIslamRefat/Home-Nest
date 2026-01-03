import React, { use, useEffect, useState } from "react";
import { useParams } from "react-router";
import { AuthContext } from "../../Contexts/AuthContext";
import Swal from "sweetalert2";
import Loading from "../../Components/Loading/Loading";
import { 
  FaMapMarkerAlt, 
  FaCalendarAlt, 
  FaStar, 
  FaBed, 
  FaBath, 
  FaCar, 
  FaRulerCombined,
  FaChevronLeft,
  FaChevronRight,
  FaCheck,
  FaTimes
} from "react-icons/fa";

const PropertyDetails = () => {
  const { id } = useParams();
  const { user } = use(AuthContext);
  const [property, setProperty] = useState({});
  const [rating, setRating] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeSection, setActiveSection] = useState('overview');
  const [relatedProperties, setRelatedProperties] = useState([]);

  // Simple multiple images array
  const propertyImages = [
    property.image,
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80"
  ].filter(Boolean);

  // Simple property specs
  const propertySpecs = {
    bedrooms: 3,
    bathrooms: 2,
    parking: 2,
    area: 1200,
    yearBuilt: 2020,
    furnished: 'Semi-furnished',
    amenities: ['WiFi', 'Swimming Pool', 'Gym', 'Security', 'Parking']
  };

  // Simple rules
  const propertyRules = [
    { rule: 'No smoking', allowed: false },
    { rule: 'Pets allowed', allowed: true },
    { rule: 'Parties allowed', allowed: false },
    { rule: 'Visitors allowed', allowed: true }
  ];

  useEffect(() => {
    setLoading(true);
    Promise.all([
      fetch(`https://home-nest-server-psi.vercel.app/properties/${id}`).then(
        (res) => res.json()
      ),
      fetch(`https://home-nest-server-psi.vercel.app/ratings/${id}`).then(
        (res) => res.json()
      ),
      fetch(`https://home-nest-server-psi.vercel.app/properties`).then(
        (res) => res.json()
      ),
    ])
      .then(([propertyData, ratingData, allProperties]) => {
        setProperty(propertyData);
        setRating(ratingData);
        const related = allProperties
          .filter(p => p.category === propertyData.category && p._id !== id)
          .slice(0, 3);
        setRelatedProperties(related);
      })
      .finally(() => setLoading(false));
  }, [id]);

  const handleAddRating = (e) => {
    e.preventDefault();
    const ratingInfo = {
      propertyId: id,
      propertyName: property.propertyName,
      propertyImage: property.image,
      userEmail: user?.email,
      userName: user?.displayName,
      userPhoto: user?.photoURL,
      rating: e.target.rating.value,
      review: e.target.review.value,
      date: new Date().toISOString(),
    };
    fetch("https://home-nest-server-psi.vercel.app/ratings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(ratingInfo),
    })
      .then((res) => res.json())
      .then(() => {
        setRating([...rating, ratingInfo]);
        Swal.fire("Review Added ✅", "Thanks for your feedback!", "success");
        e.target.reset();
      });
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % propertyImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + propertyImages.length) % propertyImages.length);
  };

  const getAverageRating = () => {
    if (rating.length === 0) return 0;
    const sum = rating.reduce((acc, r) => acc + parseInt(r.rating), 0);
    return (sum / rating.length).toFixed(1);
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="max-w-6xl mx-auto py-6 px-4 mt-10 md:mt-20">
      <title>{property.propertyName}</title>
      
      {/* Image Gallery */}
      <div className="mb-8">
        <div className="relative h-[400px] rounded-xl overflow-hidden">
          <img
            src={propertyImages[currentImageIndex]}
            alt={property.propertyName}
            className="w-full h-full object-cover"
          />
          
          {propertyImages.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
              >
                <FaChevronLeft />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
              >
                <FaChevronRight />
              </button>
            </>
          )}

          <div className="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
            {currentImageIndex + 1} / {propertyImages.length}
          </div>
        </div>

        {/* Simple Thumbnails */}
        {propertyImages.length > 1 && (
          <div className="flex gap-2 mt-4">
            {propertyImages.map((img, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-16 h-16 rounded-lg overflow-hidden border-2 ${
                  index === currentImageIndex ? 'border-[#FF5A3C]' : 'border-gray-300'
                }`}
              >
                <img src={img} alt={`View ${index + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Property Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
          {property.propertyName}
        </h1>
        
        <div className="flex flex-wrap items-center gap-4 mb-4">
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
            <FaMapMarkerAlt className="text-[#FF5A3C]" />
            <span>{property.location}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
            <FaCalendarAlt className="text-[#FF5A3C]" />
            <span>{new Date(property.postedDate).toLocaleDateString()}</span>
          </div>
          {rating.length > 0 && (
            <div className="flex items-center gap-2">
              <FaStar className="text-yellow-400" />
              <span className="font-semibold">{getAverageRating()}</span>
              <span className="text-gray-500">({rating.length} reviews)</span>
            </div>
          )}
        </div>

        <div className="flex items-center gap-4 mb-6">
          <div className="text-2xl font-bold text-[#FF5A3C]">
            ${property.price?.toLocaleString()}
          </div>
          <div className="bg-[#FF5A3C] text-white px-3 py-1 rounded-full text-sm">
            {property.category}
          </div>
        </div>

        {/* Owner Info */}
        <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
          <img
            src={property.postedBy?.photo}
            alt={property.postedBy?.name}
            className="w-12 h-12 rounded-full"
          />
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white">
              {property.postedBy?.name}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              {property.postedBy?.email}
            </p>
          </div>
        </div>
      </div>

      {/* Simple Navigation */}
      <div className="mb-8">
        <div className="flex gap-4 border-b border-gray-200 dark:border-gray-700">
          {[
            { id: 'overview', label: 'Overview' },
            { id: 'specs', label: 'Specifications' },
            { id: 'rules', label: 'Rules' },
            { id: 'reviews', label: 'Reviews' },
            { id: 'related', label: 'Similar Properties' }
          ].map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`py-3 px-4 border-b-2 font-medium ${
                activeSection === section.id
                  ? 'border-[#FF5A3C] text-[#FF5A3C]'
                  : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400'
              }`}
            >
              {section.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content Sections */}
      <div className="mb-8">
        {/* Overview Section */}
        {activeSection === 'overview' && (
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Description</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {property.description}
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">Key Features</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                  <FaBed className="text-[#FF5A3C] text-xl" />
                  <div>
                    <div className="font-semibold">{propertySpecs.bedrooms}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Bedrooms</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                  <FaBath className="text-[#FF5A3C] text-xl" />
                  <div>
                    <div className="font-semibold">{propertySpecs.bathrooms}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Bathrooms</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                  <FaCar className="text-[#FF5A3C] text-xl" />
                  <div>
                    <div className="font-semibold">{propertySpecs.parking}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Parking</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                  <FaRulerCombined className="text-[#FF5A3C] text-xl" />
                  <div>
                    <div className="font-semibold">{propertySpecs.area}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Sq Ft</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">Amenities</h3>
              <div className="flex flex-wrap gap-2">
                {propertySpecs.amenities.map((amenity, index) => (
                  <span key={index} className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm">
                    {amenity}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Specifications Section */}
        {activeSection === 'specs' && (
          <div>
            <h2 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">Property Specifications</h2>
            <div className="space-y-4">
              <div className="flex justify-between py-3 border-b border-gray-200 dark:border-gray-700">
                <span className="text-gray-600 dark:text-gray-300">Bedrooms</span>
                <span className="font-semibold">{propertySpecs.bedrooms}</span>
              </div>
              <div className="flex justify-between py-3 border-b border-gray-200 dark:border-gray-700">
                <span className="text-gray-600 dark:text-gray-300">Bathrooms</span>
                <span className="font-semibold">{propertySpecs.bathrooms}</span>
              </div>
              <div className="flex justify-between py-3 border-b border-gray-200 dark:border-gray-700">
                <span className="text-gray-600 dark:text-gray-300">Area</span>
                <span className="font-semibold">{propertySpecs.area} sq ft</span>
              </div>
              <div className="flex justify-between py-3 border-b border-gray-200 dark:border-gray-700">
                <span className="text-gray-600 dark:text-gray-300">Parking</span>
                <span className="font-semibold">{propertySpecs.parking} spaces</span>
              </div>
              <div className="flex justify-between py-3 border-b border-gray-200 dark:border-gray-700">
                <span className="text-gray-600 dark:text-gray-300">Year Built</span>
                <span className="font-semibold">{propertySpecs.yearBuilt}</span>
              </div>
              <div className="flex justify-between py-3 border-b border-gray-200 dark:border-gray-700">
                <span className="text-gray-600 dark:text-gray-300">Furnished</span>
                <span className="font-semibold">{propertySpecs.furnished}</span>
              </div>
            </div>
          </div>
        )}

        {/* Rules Section */}
        {activeSection === 'rules' && (
          <div>
            <h2 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">Property Rules</h2>
            <div className="space-y-3">
              {propertyRules.map((rule, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                  <span className="text-gray-700 dark:text-gray-300">{rule.rule}</span>
                  <div className="flex items-center gap-2">
                    {rule.allowed ? (
                      <>
                        <FaCheck className="text-green-500" />
                        <span className="text-green-500 font-semibold">Allowed</span>
                      </>
                    ) : (
                      <>
                        <FaTimes className="text-red-500" />
                        <span className="text-red-500 font-semibold">Not Allowed</span>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Reviews Section */}
        {activeSection === 'reviews' && (
          <div>
            <h2 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">Reviews & Ratings</h2>
            
            {rating.length > 0 ? (
              <div className="space-y-6">
                {/* Simple Rating Summary */}
                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-[#FF5A3C] mb-2">{getAverageRating()}</div>
                  <div className="flex justify-center mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <FaStar
                        key={star}
                        className={`${
                          star <= Math.round(getAverageRating()) ? 'text-yellow-400' : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <div className="text-gray-600 dark:text-gray-300">{rating.length} reviews</div>
                </div>

                {/* Reviews List */}
                <div className="space-y-4">
                  {rating.map((review, index) => (
                    <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                      <div className="flex items-start gap-4">
                        <img
                          src={review.userPhoto}
                          alt={review.userName}
                          className="w-12 h-12 rounded-full"
                        />
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h4 className="font-semibold">{review.userName}</h4>
                            <div className="flex items-center gap-1">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <FaStar
                                  key={star}
                                  className={`text-sm ${
                                    star <= parseInt(review.rating) ? 'text-yellow-400' : 'text-gray-300'
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="text-sm text-gray-500">
                              {new Date(review.date).toLocaleDateString()}
                            </span>
                          </div>
                          <p className="text-gray-700 dark:text-gray-300">{review.review}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <FaStar className="text-4xl text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">No reviews yet</h3>
                <p className="text-gray-600 dark:text-gray-300">Be the first to review this property!</p>
              </div>
            )}

            {/* Simple Review Form */}
            {user && (
              <div className="mt-8 bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <form onSubmit={handleAddRating} className="space-y-4">
                  <h3 className="text-lg font-bold">Write a Review</h3>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Rating</label>
                    <select
                      name="rating"
                      className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700"
                      required
                    >
                      <option value="">Choose Rating</option>
                      <option value="5">⭐ 5 (Excellent)</option>
                      <option value="4">⭐ 4 (Good)</option>
                      <option value="3">⭐ 3 (Average)</option>
                      <option value="2">⭐ 2 (Poor)</option>
                      <option value="1">⭐ 1 (Very Bad)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Review</label>
                    <textarea
                      name="review"
                      rows="4"
                      className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700"
                      placeholder="Share your experience..."
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#FF5A3C] text-white py-3 rounded-xl font-semibold hover:bg-red-600"
                  >
                    Submit Review
                  </button>
                </form>
              </div>
            )}
          </div>
        )}

        {/* Related Properties Section */}
        {activeSection === 'related' && (
          <div>
            <h2 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">Similar Properties</h2>
            {relatedProperties.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedProperties.map((relatedProperty) => (
                  <div key={relatedProperty._id} className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700">
                    <img
                      src={relatedProperty.image}
                      alt={relatedProperty.propertyName}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="font-semibold text-lg mb-2 line-clamp-2">
                        {relatedProperty.propertyName}
                      </h3>
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 mb-2">
                        <FaMapMarkerAlt className="text-[#FF5A3C] text-sm" />
                        <span className="text-sm">{relatedProperty.location}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="text-lg font-bold text-[#FF5A3C]">
                          ${relatedProperty.price?.toLocaleString()}
                        </div>
                        <div className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full text-xs">
                          {relatedProperty.category}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <FaMapMarkerAlt className="text-4xl text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">No similar properties found</h3>
                <p className="text-gray-600 dark:text-gray-300">Check back later for more properties.</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default PropertyDetails;