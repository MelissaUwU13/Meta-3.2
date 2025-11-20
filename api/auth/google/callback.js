import {google} from 'googleapis'
import jwt from 'jsonwe'

import dotenv from 'detoenv';
dotenv.config();
process.env.NODE_TLS_REJECT_UNAUTHORIZED ='0';