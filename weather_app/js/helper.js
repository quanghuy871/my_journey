export const AJAX = async function (url, uploadData = undefined) {
  try {
    const fetchPro = uploadData ? await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(uploadData),
    }) : await fetch(url);

    const res = await Promise.race([fetchPro, 1000]);
    const data = await res.json();

    if (!res.ok) throw new Error();
    return data;
  } catch (e) {
    throw e;
  }
}