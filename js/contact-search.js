const ContactSearch = () => {
    const [searchTerm, setSearchTerm] = React.useState('');
    const [lang, setLang] = React.useState('fr');
    const [showResults, setShowResults] = React.useState(false);

    const serviceData = [
        {
            id: 'tournai',
            name: {
                fr: 'CSC Tournai',
                nl: 'ACV Doornik'
            },
            address: 'Avenue des Etats Unis 10',
            zip: '7500',
            city: {
                fr: 'Tournai',
                nl: 'Doornik'
            },
            phone: '069 88 07 07',
            phoneHours: {
                fr: 'Du lundi au vendredi de 9h00 à 12h30',
                nl: 'Maandag tot vrijdag van 9u00 tot 12u30'
            },
            openingHours: {
                fr: [
                    { day: 'Lundi', hours: '9h00 - 12h00, 13h30 - 16h30' },
                    { day: 'Mardi', hours: 'Fermé' },
                    { day: 'Mercredi', hours: 'Fermé' },
                    { day: 'Jeudi', hours: 'Fermé' },
                    { day: 'Vendredi', hours: 'Fermé' }
                ],
                nl: [
                    { day: 'Maandag', hours: '9u00 - 12u00, 13u30 - 16u30' },
                    { day: 'Dinsdag', hours: 'Gesloten' },
                    { day: 'Woensdag', hours: 'Gesloten' },
                    { day: 'Donderdag', hours: 'Gesloten' },
                    { day: 'Vrijdag', hours: 'Gesloten' }
                ]
            },
            appointmentOnly: false,
            coveredAreas: [
                { zip: '7500', name: { fr: 'Tournai', nl: 'Doornik' } },
                { zip: '7501', name: { fr: 'Orcq', nl: 'Orcq' } },
                { zip: '7502', name: { fr: 'Esplechin', nl: 'Esplechin' } }
            ]
        }
    ];

    const filteredResults = React.useMemo(() => {
        if (searchTerm.length < 2) return [];
        
        const searchLower = searchTerm.toLowerCase();
        
        return serviceData.filter(center => {
            if (center.city[lang].toLowerCase().includes(searchLower)) return true;
            if (center.zip.startsWith(searchTerm)) return true;
            return center.coveredAreas.some(area => 
                area.name[lang].toLowerCase().includes(searchLower) ||
                area.zip.startsWith(searchTerm)
            );
        });
    }, [searchTerm, lang]);

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
        setShowResults(e.target.value.length >= 2);
    };

    return (
        <div className="max-w-2xl mx-auto p-4">
            <h1 className="text-2xl font-bold text-center mb-6">
                {lang === 'fr' ? 'Trouvez votre centre de service' : 'Vind uw dienstencentrum'}
            </h1>
            
            <div className="mb-6">
                <input
                    type="text"
                    className="w-full p-2 border rounded"
                    placeholder={lang === 'fr' ? 'Code postal ou ville...' : 'Postcode of stad...'}
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
            </div>

            {showResults && (
                <div className="space-y-4">
                    {filteredResults.map(center => (
                        <div key={center.id} className="p-4 border rounded shadow-sm">
                            <h2 className="text-xl font-semibold">{center.name[lang]}</h2>
                            <p className="text-gray-600">{center.address}</p>
                            <p className="text-gray-600">{center.zip} {center.city[lang]}</p>
                            <p className="mt-2"><strong>{center.phone}</strong></p>
                            <p className="text-sm text-gray-600">{center.phoneHours[lang]}</p>
                            
                            <div className="mt-4 grid grid-cols-2 gap-2">
                                {center.openingHours[lang].map(({day, hours}) => (
                                    <div key={day} className="text-sm">
                                        <span className="font-medium">{day}:</span> {hours}
                                    </div>
                                ))}
                            </div>

                            <div className="mt-4 space-x-2">
                                <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                                    {lang === 'fr' ? 'Contact en ligne' : 'Online contact'}
                                </button>
                                <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-50">
                                    {lang === 'fr' ? 'Prendre rendez-vous' : 'Afspraak maken'}
                                </button>
                            </div>
                        </div>
                    ))}

                    {filteredResults.length === 0 && (
                        <p className="text-center text-gray-500">
                            {lang === 'fr' ? 'Aucun centre trouvé' : 'Geen centrum gevonden'}
                        </p>
                    )}
                </div>
            )}

            <button 
                onClick={() => setLang(lang === 'fr' ? 'nl' : 'fr')}
                className="fixed top-4 right-4 px-3 py-1 bg-gray-100 rounded hover:bg-gray-200"
            >
                {lang === 'fr' ? 'NL' : 'FR'}
            </button>
        </div>
    );
};