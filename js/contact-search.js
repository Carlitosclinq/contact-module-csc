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
                { zip: '7502', name: { fr: 'Esplechin', nl: 'Esplechin' } },
                { zip: '7503', name: { fr: 'Froyennes', nl: 'Froyennes' } },
                { zip: '7504', name: { fr: 'Froidmont', nl: 'Froidmont' } },
                { zip: '7506', name: { fr: 'Willemeau', nl: 'Willemeau' } },
                { zip: '7520', name: { fr: 'Templeuve', nl: 'Templeuve' } },
                { zip: '7521', name: { fr: 'Tournai', nl: 'Doornik' } },
                { zip: '7522', name: { fr: 'Lamain', nl: 'Lamain' } },
                { zip: '7530', name: { fr: 'Gaurain-Ramecroix', nl: 'Gaurain-Ramecroix' } },
                { zip: '7531', name: { fr: 'Havinnes', nl: 'Havinnes' } },
                { zip: '7532', name: { fr: 'Beclers', nl: 'Beclers' } },
                { zip: '7533', name: { fr: 'Thimougies', nl: 'Thimougies' } },
                { zip: '7534', name: { fr: 'Barry', nl: 'Barry' } },
                { zip: '7536', name: { fr: 'Vaulx', nl: 'Vaulx' } },
                { zip: '7538', name: { fr: 'Vezon', nl: 'Vezon' } },
                { zip: '7540', name: { fr: 'Kain', nl: 'Kain' } }
            ]
        },
        {
            id: 'kortrijk',
            name: {
                fr: 'CSC Courtrai',
                nl: 'ACV Kortrijk'
            },
            address: 'President Kennedypark 16D',
            zip: '8500',
            city: {
                fr: 'Courtrai',
                nl: 'Kortrijk'
            },
            phone: '051 23 58 00',
            phoneHours: {
                fr: 'Du lundi au jeudi de 8h30 à 17h00, vendredi de 8h30 à 12h00',
                nl: 'Maandag tot donderdag van 8u30 tot 17u00, vrijdag van 8u30 tot 12u00'
            },
            openingHours: {
                fr: [
                    { day: 'Lundi', hours: '8h45 - 12h00, 14h00 - 16h45' },
                    { day: 'Mardi', hours: '8h45 - 11h45' },
                    { day: 'Mercredi', hours: 'Fermé' },
                    { day: 'Jeudi', hours: '14h00 - 17h30' },
                    { day: 'Vendredi', hours: '8h45 - 11h45' }
                ],
                nl: [
                    { day: 'Maandag', hours: '8u45 - 12u00, 14u00 - 16u45' },
                    { day: 'Dinsdag', hours: '8u45 - 11u45' },
                    { day: 'Woensdag', hours: 'Gesloten' },
                    { day: 'Donderdag', hours: '14u00 - 17u30' },
                    { day: 'Vrijdag', hours: '8u45 - 11u45' }
                ]
            },
            appointmentOnly: false,
            coveredAreas: [
                { zip: '8500', name: { fr: 'Courtrai', nl: 'Kortrijk' } },
                { zip: '8501', name: { fr: 'Heule', nl: 'Heule' } },
                { zip: '8510', name: { fr: 'Marke', nl: 'Marke' } },
                { zip: '8511', name: { fr: 'Aalbeke', nl: 'Aalbeke' } },
                { zip: '8520', name: { fr: 'Kuurne', nl: 'Kuurne' } },
                { zip: '8530', name: { fr: 'Harelbeke', nl: 'Harelbeke' } },
                { zip: '8531', name: { fr: 'Bavikhove', nl: 'Bavikhove' } },
                { zip: '8540', name: { fr: 'Deerlijk', nl: 'Deerlijk' } },
                { zip: '8550', name: { fr: 'Zwevegem', nl: 'Zwevegem' } },
                { zip: '8551', name: { fr: 'Heestert', nl: 'Heestert' } },
                { zip: '8552', name: { fr: 'Moen', nl: 'Moen' } },
                { zip: '8553', name: { fr: 'Otegem', nl: 'Otegem' } },
                { zip: '8554', name: { fr: 'Sint-Denijs', nl: 'Sint-Denijs' } },
                { zip: '8560', name: { fr: 'Wevelgem', nl: 'Wevelgem' } },
                { zip: '8570', name: { fr: 'Anzegem', nl: 'Anzegem' } },
                { zip: '8580', name: { fr: 'Avelgem', nl: 'Avelgem' } }
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