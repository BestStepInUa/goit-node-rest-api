import multer from 'multer';
import path from 'path';

const destination = path.resolve('temp');

const storage = multer.diskStorage({
  destination,
});
