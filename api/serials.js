export default async function handler(req, res) {
  // اجازه دسترسی به CORS (در صورت نیاز)
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');

  const databaseURL = "https://fizonchat-default-rtdb.firebaseio.com";

  try {
    const response = await fetch(`${databaseURL}/serials.json`);
    
    if (!response.ok) {
      throw new Error('خطا در دریافت اطلاعات از فایربیس');
    }

    const data = await response.json();
    return res.status(200).json(data || {});
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'خطای سرور در ارتباط با دیتابیس' });
  }
}
