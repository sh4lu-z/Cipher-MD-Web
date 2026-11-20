export default function handler(req, res) {
    const rawCountry = req.headers['x-vercel-ip-country'] || '';
    const country = /^[a-z]{2}$/i.test(rawCountry.trim())
        ? rawCountry.trim().toLowerCase()
        : 'us';

    res.setHeader('Cache-Control', 'no-store');
    res.status(200).json({ country });
}
